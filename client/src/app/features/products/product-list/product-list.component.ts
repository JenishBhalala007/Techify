import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService, Product } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory = 'All';
  priceMax = 100000;
  priceAbsMax = 100000;
  compareList: any[] = [];
  categories: string[] = ['All'];
  searchTerm = '';
  sortBy = 'Featured';
  selectedBrands: string[] = [];
  brands: string[] = [];
  loading = true;
  error = '';

  wishlistIds = new Set<string>();
  wishlistLoading = new Set<string>(); // tracks per-product loading state
  private wishlistSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService,
    public userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productService.fetchAll().subscribe({
      next: (products) => {
        this.allProducts = products;
        const cats = [...new Set(products.map(p => p.category).filter(Boolean))];
        this.categories = ['All', ...cats];
        
        const b = [...new Set(products.map(p => p.brand).filter(Boolean))];
        this.brands = b.sort();
        
        const maxP = products.reduce((m, p) => Math.max(m, p.price), 0);
        this.priceAbsMax = maxP > 0 ? Math.ceil(maxP) : 100000;
        this.priceMax = this.priceAbsMax;
        this.loading = false;
        this.applyFilters();
      },
      error: () => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
      }
    });

    // Subscribe to query parameters for search
    this.route.queryParams.subscribe(params => {
      this.searchTerm = (params['search'] || '').toLowerCase();
      this.applyFilters();
    });

    // Subscribe to wishlist state from the profile stream
    this.wishlistSub = this.userService.userProfile$.subscribe(profile => {
      this.wishlistIds.clear();
      if (profile && profile.wishlist) {
        profile.wishlist.forEach((item: any) => {
          const id = typeof item === 'string' ? item : String(item._id || item.id || '');
          if (id) this.wishlistIds.add(id);
        });
      }
    });

    // If profile not in memory yet, fetch it (for reload persistence)
    if (!this.userService.getCurrentProfile() && this.authService.isLoggedIn()) {
      this.userService.getUserProfile().subscribe({ error: () => {} });
    }
  }

  ngOnDestroy(): void {
    this.wishlistSub?.unsubscribe();
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistIds.has(productId);
  }

  toggleWishlist(event: Event, productId: string): void {
    event.stopPropagation();
    if (!this.authService.isLoggedIn()) {
      alert('Please log in to add items to your wishlist.');
      return;
    }
    if (this.wishlistLoading.has(productId)) return; // prevent double-click
    this.wishlistLoading.add(productId);
    this.userService.toggleWishlist(productId).subscribe({
      next: () => { this.wishlistLoading.delete(productId); },
      error: (err) => {
        console.error('Wishlist toggle failed:', err);
        this.wishlistLoading.delete(productId);
      }
    });
  }

  filterByCategory(cat: string): void {
    this.selectedCategory = cat;
    this.applyFilters();
  }

  toggleBrand(brand: string): void {
    const idx = this.selectedBrands.indexOf(brand);
    if (idx > -1) this.selectedBrands.splice(idx, 1);
    else this.selectedBrands.push(brand);
    this.applyFilters();
  }

  applyFilters(): void {
    let products = this.allProducts;
    if (this.searchTerm) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(this.searchTerm) || 
        (p.description && p.description.toLowerCase().includes(this.searchTerm))
      );
    }
    if (this.selectedCategory !== 'All') {
      products = products.filter(p => p.category === this.selectedCategory);
    }
    
    if (this.selectedBrands.length > 0) {
      products = products.filter(p => this.selectedBrands.includes(p.brand));
    }

    products = products.filter(p => p.price <= this.priceMax);
    
    if (this.sortBy === 'Price: Low to High') {
      products.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'Price: High to Low') {
      products.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'Newest') {
      products.sort((a, b) => {
        const idA = String((a as any).createdAt || a.id || '');
        const idB = String((b as any).createdAt || b.id || '');
        return idB.localeCompare(idA);
      });
    }

    this.filteredProducts = products;
  }

  toggleCompare(id: any): void {
    const idx = this.compareList.indexOf(id);
    if (idx > -1) { this.compareList.splice(idx, 1); }
    else if (this.compareList.length < 3) { this.compareList.push(id); }
  }

  isInCompare(id: any): boolean { return this.compareList.includes(id); }
}
