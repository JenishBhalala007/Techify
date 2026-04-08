import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, UserProfile } from '../../core/services/user.service';
import { OrderService, Order } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';

interface Product {
  productId?: string;
  name: string;
  image: string;
  qty: number;
  price?: string;
  originalProduct?: any;
  stockQuantity?: number;
}

interface OrderDisplay {
  id: string;
  date: string;
  amount: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  products: Product[];
  shippingAddress?: any;
  paymentMethod?: string;
  itemsPrice?: string;
  rawOrder?: any;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  activeSection = 'overview';
  loading = true;
  userProfile: UserProfile | null = null;
  orders: any[] = [];
  selectedOrder: OrderDisplay | null = null;
  wishlist: Product[] = [];
  currentDate = new Date();
  profileForm!: FormGroup;
  savingProfile = false;
  profileSaved = false;
  wishlistError: string = '';
  updatingProfile: boolean = false;
  wishlistMap: Map<string, any> = new Map();
  isEditMode: boolean = false;
  isSaving: boolean = false;
  mappedOrders: any[] = []; // Added for mapped orders
  currentUser: any = null; // Added to store current user details from Auth
  orderSearchTerm = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
  private toast: ToastService
  ) {}

  addToCartFromWishlist(item: Product): void {
    if (item.originalProduct) {
      this.cartService.add({
        id: item.originalProduct._id,
        title: item.originalProduct.title || item.name,
        price: item.originalProduct.finalPrice || parseFloat(item.price || '0'),
        images: item.originalProduct.images || [item.image],
        category: item.originalProduct.category || '',
        description: item.originalProduct.description || ''
      } as any);
    }
  }

  removeFromWishlist(productId: string | undefined): void {
    if (!productId) return;
    this.userService.toggleWishlist(productId).subscribe({
      next: (data: any[]) => {
        // Backend returns normalised { _id, name, price, image } objects
        this.wishlist = (data || []).map((item: any) => ({
          productId: item._id,
          name: item.name || item.title || 'Product',
          image: item.image || (item.images && item.images.length > 0 ? item.images[0] : 'assets/images/placeholder.jpg'),
          qty: 1,
          price: (item.price || 0).toFixed(2),
          originalProduct: item
        }));
        this.wishlistMap.clear();
        this.wishlist.forEach((item: any) => {
          this.wishlistMap.set(item.productId!, item);
        });
      },
      error: (err) => console.error('Error removing from wishlist', err)
    });
  }

  viewOrderDetails(order: OrderDisplay, event: Event): void {
    event.preventDefault();
    this.selectedOrder = order;
  }

  closeOrderDetails(): void {
    this.selectedOrder = null;
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth']);
      return;
    }

    this.currentUser = this.authService.getCurrentUser();

    this.profileForm = this.fb.group({
      firstName: [this.currentUser?.name?.split(' ')[0] || '', Validators.required],
      lastName: [this.currentUser?.name?.split(' ').slice(1).join(' ') || '', Validators.required],
      email: [{ value: this.currentUser?.email || '', disabled: true }],
      phone: [this.currentUser?.phone || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.loadUserData();
  }

  loadUserData(): void {
    this.loading = true;

    // Load user profile via local subject state for reactivity
    this.userService.userProfile$.subscribe({
      next: (profile) => {
        if (!profile) return;
        this.userProfile = profile;
        // Patch profile form
        const profileName = profile?.name || this.currentUser?.name || '';
        const profileEmail = profile?.email || this.currentUser?.email || '';
        const profilePhone = profile?.phone || this.currentUser?.phone || '';
        
        const nameParts = profileName.split(' ') || [];
        this.profileForm.patchValue({
          firstName: nameParts[0] || '',
          lastName: nameParts.slice(1).join(' ') || '',
          email: profileEmail || '',
          phone: profilePhone || ''
        });

        // Map wishlist — backend returns normalised { _id, name, price, image } objects
        this.wishlist = (profile.wishlist || []).map((item: any) => ({
          productId: item._id,
          name: item.name || item.title || 'Product',
          image: item.image || (item.images && item.images.length > 0 ? item.images[0] : 'assets/images/placeholder.jpg'),
          qty: 1,
          price: (item.price || 0).toFixed(2),
          originalProduct: item
        }));
        this.wishlistMap.clear();
        this.wishlist.forEach((item: any) => {
          this.wishlistMap.set(item.productId!, item);
        });

        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading user profile state:', error);
        this.loading = false;
      }
    });

    // Trigger HTTP call to load the profile initially
    this.userService.getUserProfile().subscribe({
      error: (error) => console.error('Error fetching user profile:', error)
    });

    // Load user orders
    this.orderService.getMyOrders().subscribe({
      next: (orders) => {
        this.orders = orders; // Assign raw orders
        this.mapOrders(); // Map them for display
      },
      error: (error) => {
        console.error('Error loading orders:', error);
      }
    });
  }

  getfirstName(): string {
    if (this.userProfile && this.userProfile.name) {
      return this.userProfile.name.split(' ')[0];
    }
    if (this.currentUser && this.currentUser.name) {
      return this.currentUser.name.split(' ')[0];
    }
    return 'User';
  }

  getlastName(): string {
    if (this.userProfile && this.userProfile.name) {
      const parts = this.userProfile.name.split(' ');
      return parts.length > 1 ? parts.slice(1).join(' ') : '';
    }
    if (this.currentUser && this.currentUser.name) {
      const parts = this.currentUser.name.split(' ');
      return parts.length > 1 ? parts.slice(1).join(' ') : '';
    }
    return '';
  }

  mapOrders() {
      if(!this.orders) return;
      this.mappedOrders = this.orders.map((o: any) => {
          const firstItem = o.orderItems && o.orderItems.length > 0 ? o.orderItems[0] : null;
          return {
              id: `#${o._id.substring(o._id.length - 7).toUpperCase()}`,
              date: new Date(o.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
              amount: o.totalPrice ? o.totalPrice.toFixed(2) : '0.00',
              status: o.orderStatus || o.status || 'Processing',
              products: (o.orderItems || []).map((item: any) => {
                let finalImage = 'assets/images/placeholder.jpg';
                if (item.image) finalImage = item.image;
                else if (item.product && item.product.image) finalImage = item.product.image;
                else if (item.productId && item.productId.image) finalImage = item.productId.image;
                else if (item.productId && item.productId.images && item.productId.images.length > 0) finalImage = item.productId.images[0];
                
                return {
                  name: item.title || (item.product && item.product.name) || (item.productId && (item.productId.title || item.productId.name)) || 'Product',
                  image: finalImage,
                  qty: item.quantity || 1,
                  price: (item.priceAtPurchase || item.price || 0).toFixed(2)
                };
              }),
              // Derived fields
              _originalId: o._id,
              shippingAddress: o.shippingAddress,
              paymentMethod: o.paymentMethod,
              itemsPrice: o.itemsPrice ? o.itemsPrice.toFixed(2) : '0.00',
              rawOrder: o,
          };
      });
  }

  onOrderSearch(event: Event): void {
    this.orderSearchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  get displayedOrders() {
    if (!this.orderSearchTerm) return this.mappedOrders;
    return this.mappedOrders.filter(o => 
      o.id.toLowerCase().includes(this.orderSearchTerm) ||
      o.products.some((p: any) => p.name.toLowerCase().includes(this.orderSearchTerm)) ||
      o.status.toLowerCase().includes(this.orderSearchTerm)
    );
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400';
      case 'shipped': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400';
      case 'processing': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400';
      case 'cancelled': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-400';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400';
    }
  }

  saveProfile(): void {
    if (this.profileForm.invalid || this.savingProfile) return;
    const { firstName, lastName, phone } = this.profileForm.getRawValue();
    const name = [firstName, lastName].filter(Boolean).join(' ');
    this.savingProfile = true;
    this.userService.updateUserProfile({ name, phone }).subscribe({
      next: (updated) => {
        this.userProfile = { ...this.userProfile!, ...updated };
        this.savingProfile = false;
        this.isEditMode = false;
        this.profileSaved = true;
        this.authService.updateSession({ name: updated.name, phone: updated.phone }); // Sync session
        this.toast.success('Profile updated successfully!');
        setTimeout(() => this.profileSaved = false, 3000);
      },
      error: () => {
        this.savingProfile = false;
        this.toast.error('Failed to save profile. Please try again.');
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
