import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { UserService } from '../../../core/services/user.service';
import { CartService } from '../../../core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  quantity = 1;
  activeImageIndex = 0;
  loading = true;
  notFound = false;
  product: any = null;
  selectedColor = 'graphite';
  selectedConnectivity = 'logi-bolt';
  addingToWishlist = false;
  isInWishlist = false;
  similarProducts: any[] = [];
  private wishlistSub?: Subscription;

  get images(): string[] {
    return this.product?.images?.length ? this.product.images : [];
  }

  get finalPrice(): number {
    if (!this.product) return 0;
    return this.product.discountPercentage > 0
      ? +(this.product.price * (1 - this.product.discountPercentage / 100)).toFixed(2)
      : this.product.price;
  }

  get productFeatures(): {key: string, value: string}[] {
    if (!this.product || !this.product.features) return [];
    return Object.keys(this.product.features).map(key => ({
      key,
      value: this.product.features[key]
    }));
  }

  private userService = inject(UserService);

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.notFound = true; this.loading = false; return; }
    this.productService.fetchById(id).subscribe({
      next: (p) => { 
        this.product = p; 
        this.loading = false; 
        this.loadSimilarProducts();
      },
      error: () => { this.notFound = true; this.loading = false; }
    });

    this.wishlistSub = this.userService.userProfile$.subscribe(profile => {
      if (profile && profile.wishlist && id) {
        this.isInWishlist = profile.wishlist.some(item => {
          const itemId = typeof item === 'string'
            ? item
            : String(item._id || item.id || item.productId || '');
          return itemId === String(id);
        });
      } else {
        this.isInWishlist = false;
      }
    });
  }

  ngOnDestroy() {
    this.wishlistSub?.unsubscribe();
  }

  increaseQuantity(): void {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  setActiveImage(index: number): void {
    this.activeImageIndex = index;
  }

  addToCart(): void {
    if (this.product) {
      // Add product to cart generic store
      const p = {
        id: this.product._id,
        title: this.product.title,
        price: this.finalPrice,
        images: this.images,
        category: this.product.category || '',
        description: this.product.description || ''
      };
      
      // We manually increase quantity based on selection
      for(let i=0; i<this.quantity; i++) {
        this.cartService.add(p as any);
      }
      alert('Product added to cart!');
    }
  }

  toggleWishlist(): void {
    if (this.product && this.product._id) {
      if (this.addingToWishlist) return;
      this.addingToWishlist = true;
      this.userService.toggleWishlist(this.product._id).subscribe({
        next: () => {
          this.addingToWishlist = false;
        },
        error: (err) => {
          this.addingToWishlist = false;
          console.error(err);
          const msg = err.error?.message || err.message || 'Error updating wishlist.';
          if (err.status === 401) {
            alert('Please login to use wishlist.');
          } else {
            alert('Error: ' + msg);
          }
        }
      });
    }
  }

  loadSimilarProducts(): void {
    if (!this.product || !this.product.category) return;
    
    // Normalize the current product's category for comparison
    const currentCategory = this.normalizeCategory(this.product.category);
    
    this.productService.fetchAll().subscribe({
      next: (products) => {
        // Filter products by same normalized category and exclude current product
        this.similarProducts = products
          .filter(p => 
            p.category === currentCategory && 
            p.id !== this.product._id
          )
          .slice(0, 4); // Limit to 4 similar products
        
        console.log('Current product category:', currentCategory);
        console.log('Similar products found:', this.similarProducts.length);
      },
      error: (err) => {
        console.error('Error loading similar products:', err);
        this.similarProducts = [];
      }
    });
  }

  // Normalize category to match the service's normalization
  private normalizeCategory(category: string): string {
    if (!category) return '';
    const normalized = category.trim();
    const lower = normalized.toLowerCase();
    
    // Map common variations to standard names
    if (lower === 'keyboard' || lower === 'keyboards') return 'Keyboards';
    if (lower === 'mouse' || lower === 'mice') return 'Mice';
    if (lower === 'audio' || lower === 'headset' || lower === 'headsets') return 'Audio';
    if (lower === 'monitor' || lower === 'monitors') return 'Monitors';
    
    // Return sentence case for other categories
    return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
  }
}
