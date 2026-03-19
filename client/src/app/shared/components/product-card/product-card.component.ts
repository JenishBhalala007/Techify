import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { UserService } from '../../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card" (click)="goToProduct()">
      <!-- Image -->
      <div class="card-image">
        <img [src]="product.image" [alt]="product.name" loading="lazy" />
        <div class="card-badge" *ngIf="product.originalPrice">
          {{ getDiscount() }}% OFF
        </div>
      </div>

      <!-- Content -->
      <div class="card-content">
        <div class="card-meta">
          <span class="card-category">{{ product.category }}</span>
          <div class="card-rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>{{ product.rating }}</span>
          </div>
        </div>

        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-brand">{{ product.brand }}</p>

        <!-- Spec Tags -->
        <div class="card-tags">
          <span class="pill-tag" *ngFor="let tag of product.tags">{{ tag }}</span>
        </div>

        <!-- Price & CTA -->
        <div class="card-footer">
          <div class="card-price">
            <span class="price-current">₹{{ product.price.toFixed(2) }}</span>
            <span class="price-original" *ngIf="product.originalPrice">
              ₹{{ product.originalPrice.toFixed(2) }}
            </span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="add-to-wishlist" (click)="toggleWishlist($event)" [title]="isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'" style="background: none; border: none; cursor: pointer; padding: 0.5rem; color: #f43f5e; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #fff1f2;">
              <svg *ngIf="isInWishlist" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <svg *ngIf="!isInWishlist" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button class="add-to-cart" (click)="addToCart($event)" title="Add to Cart">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product!: Product;
  addingToWishlist = false;
  isInWishlist = false;
  private wishlistSub?: Subscription;
  
  private userService = inject(UserService);

  constructor(
    private cartService: CartService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.wishlistSub = this.userService.userProfile$.subscribe(profile => {
      if (profile && profile.wishlist) {
        // Backend returns normalised { _id, name, price, image } objects
        // Use String() to safely handle both ObjectId objects and plain strings
        this.isInWishlist = profile.wishlist.some(item => {
          const itemId = typeof item === 'string'
            ? item
            : String(item._id || item.id || item.productId || '');
          return itemId === String(this.product.id);
        });
      } else {
        this.isInWishlist = false;
      }
    });

    // If profile not yet loaded (e.g. on page reload), fetch it from server
    if (!this.userService.getCurrentProfile()) {
      this.userService.getUserProfile().subscribe({ error: () => {} });
    }
  }

  ngOnDestroy() {
    this.wishlistSub?.unsubscribe();
  }

  goToProduct(): void {
    this.router.navigate(['/products', this.product.id]);
  }

  addToCart(e: Event): void {
    e.stopPropagation();
    this.cartService.add(this.product);
  }

  toggleWishlist(e: Event): void {
    e.stopPropagation();
    if (this.product && this.product.id) {
      if (this.addingToWishlist) return;
      this.addingToWishlist = true;
      this.userService.toggleWishlist(this.product.id).subscribe({
        next: () => {
          this.addingToWishlist = false;
        },
        error: (err) => {
          this.addingToWishlist = false;
          console.error(err);
          // Show the actual error message from the backend if it exists
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

  getDiscount(): number {
    if (!this.product.originalPrice) return 0;
    return Math.round((1 - this.product.price / this.product.originalPrice) * 100);
  }
}
