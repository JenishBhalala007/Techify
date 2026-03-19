import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AdminService, AdminProduct, AdminOrder, AdminUser, AdminMessage } from '../../core/services/admin.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  activeSection = 'overview';
  loading = true;
  products: AdminProduct[] = [];
  orders: AdminOrder[] = [];
  users: AdminUser[] = [];
  messages: AdminMessage[] = [];
  currentAdminName = '';
  currentAdminEmail = '';

  productSearchTerm = '';
  orderSearchTerm = '';
  userSearchTerm = '';

  showAddForm = false;
  addForm!: FormGroup;
  addingProduct = false;
  editingProductId: string | null = null;

  selectedOrder: AdminOrder | null = null;
  showOrderDetail = false;

  sections = [
    { id: 'overview',  label: 'Overview',  icon: 'home' },
    { id: 'orders',    label: 'Orders',    icon: 'shopping_bag' },
    { id: 'users',     label: 'Users',     icon: 'group' },
    { id: 'products',  label: 'Products',  icon: 'inventory_2' },
    { id: 'messages',  label: 'Messages',  icon: 'mail' },
  ];

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth']);
      return;
    }
    const user = this.authService.getCurrentUser();
    this.currentAdminName = user?.name || 'Admin';
    this.currentAdminEmail = user?.email || '';
    this.loadData();
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      discountPercentage: [0, [Validators.min(0), Validators.max(100)]],
      stockQuantity: [0, [Validators.required, Validators.min(0)]],
      images: [''],
      features: this.fb.array([])
    });
  }

  get features(): FormArray {
    return this.addForm.get('features') as FormArray;
  }

  addFeature(): void {
    this.features.push(this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required]
    }));
  }

  removeFeature(index: number): void {
    this.features.removeAt(index);
  }

  get displayedProducts(): AdminProduct[] {
    if (!this.productSearchTerm) return this.products;
    return this.products.filter(p => p.title.toLowerCase().includes(this.productSearchTerm));
  }

  get displayedOrders(): AdminOrder[] {
    if (!this.orderSearchTerm) return this.orders;
    return this.orders.filter(o => 
      o._id.toLowerCase().includes(this.orderSearchTerm) ||
      this.getOrderUserName(o).toLowerCase().includes(this.orderSearchTerm) ||
      o.orderStatus.toLowerCase().includes(this.orderSearchTerm)
    );
  }

  get displayedUsers(): AdminUser[] {
    if (!this.userSearchTerm) return this.users;
    return this.users.filter(u => 
      u.name.toLowerCase().includes(this.userSearchTerm) ||
      u.email.toLowerCase().includes(this.userSearchTerm)
    );
  }

  onProductSearch(event: Event): void {
    this.productSearchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  onOrderSearch(event: Event): void {
    this.orderSearchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  onUserSearch(event: Event): void {
    this.userSearchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  loadData(): void {
    this.loading = true;

    this.adminService.getProducts().pipe(catchError(err => { console.error('Products API error:', err); return of([]); }))
      .subscribe(data => { this.products = data as any[]; });

    this.adminService.getOrders().pipe(catchError(err => { console.error('Orders API error:', err); return of([]); }))
      .subscribe(data => { this.orders = data as any[]; });

    this.adminService.getMessages().pipe(catchError(err => { console.error('Messages API error:', err); return of([]); }))
      .subscribe(data => { this.messages = data as any[]; });

    this.adminService.getUsers().pipe(catchError(err => {
      const msg = err?.error?.message || `HTTP ${err?.status}`;
      this.toast.error(`Could not load users: ${msg}. Make sure you are logged in as admin.`);
      this.loading = false;
      return of([]);
    })).subscribe(data => {
      this.users = data as any[];
      this.loading = false;
    });
  }

  get totalRevenue(): number {
    return this.orders.reduce((sum, o) => sum + o.totalPrice, 0);
  }

  get newOrdersCount(): number {
    return this.orders.filter(o => o.orderStatus === 'Processing').length;
  }

  get newCustomersThisMonth(): number {
    const now = new Date();
    return this.users.filter(u => {
      if (!u.createdAt) return false;
      const d = new Date(u.createdAt);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }

  getOrderUserName(order: AdminOrder): string {
    if (typeof order.userId === 'object' && order.userId !== null) {
      return (order.userId as any).name || 'Unknown';
    }
    return 'Unknown';
  }

  getOrderStatusClass(status: string): string {
    switch (status) {
      case 'Processing': return 'bg-amber-100 text-amber-700';
      case 'Shipped':    return 'bg-indigo-100 text-indigo-700';
      case 'Delivered':  return 'bg-emerald-100 text-emerald-700';
      case 'Cancelled':  return 'bg-red-100 text-red-700';
      default:           return 'bg-slate-100 text-slate-600';
    }
  }

  getUserOrderCount(userId: string): number {
    return this.orders.filter(o => {
      const uid = typeof o.userId === 'object' ? (o.userId as any)._id : o.userId;
      return uid === userId;
    }).length;
  }

  getUserTotalSpent(userId: string): number {
    return this.orders
      .filter(o => {
        const uid = typeof o.userId === 'object' ? (o.userId as any)._id : o.userId;
        return uid === userId;
      })
      .reduce((sum, o) => sum + o.totalPrice, 0);
  }

  getStockPercentage(product: AdminProduct): number {
    const maxQty = product.maxStockQuantity || product.stockQuantity || 1;
    return Math.min(100, Math.max(0, Math.round((product.stockQuantity / maxQty) * 100)));
  }

  getFinalPrice(product: AdminProduct): number {
    if (product.discountPercentage && product.discountPercentage > 0) {
      return +(product.price * (1 - product.discountPercentage / 100)).toFixed(2);
    }
    return product.price;
  }

  deleteProduct(id: string): void {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    this.adminService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p._id !== id);
        this.toast.success('Product deleted successfully.');
      },
      error: (err) => { this.toast.error(err?.error?.message || 'Failed to delete product.'); }
    });
  }

  openAddForm(): void {
    this.editingProductId = null;
    this.addForm.reset({ discountPercentage: 0, stockQuantity: 0, images: '' });
    this.features.clear();
    this.showAddForm = true;
  }

  openEditForm(product: any): void {
    this.editingProductId = product._id;
    this.features.clear();
    
    // Populate features if they exist
    if (product.features) {
      Object.keys(product.features).forEach(key => {
        this.features.push(this.fb.group({
          key: [key, Validators.required],
          value: [product.features[key], Validators.required]
        }));
      });
    }

    this.addForm.patchValue({
      title: product.title,
      description: product.description,
      category: product.category,
      brand: product.brand,
      price: product.price,
      discountPercentage: product.discountPercentage || 0,
      stockQuantity: product.stockQuantity || 0,
      images: product.images ? product.images.join(', ') : ''
    });

    this.showAddForm = true;
  }

  closeAddForm(): void {
    this.showAddForm = false;
    this.editingProductId = null;
  }

  onCategoryInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (value) {
      // Convert to sentence case: first letter uppercase, rest lowercase
      const sentenceCase = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      this.addForm.patchValue({ category: sentenceCase }, { emitEvent: false });
      // Update cursor position
      const cursorPosition = input.selectionStart || 0;
      setTimeout(() => {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  }

  onBrandInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (value) {
      // Convert to title case: first letter of each word uppercase
      const titleCase = value.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join(' ');
      this.addForm.patchValue({ brand: titleCase }, { emitEvent: false });
      // Update cursor position
      const cursorPosition = input.selectionStart || 0;
      setTimeout(() => {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  }

  submitProduct(): void {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.addingProduct = true;
    const v = this.addForm.value;

    // Convert features array to object for DB
    const featuresObj: Record<string, string> = {};
    if (v.features && v.features.length) {
      v.features.forEach((f: any) => {
        if (f.key && f.value) {
          featuresObj[f.key] = f.value;
        }
      });
    }

    const payload = {
      ...v,
      price: Number(v.price),
      discountPercentage: Number(v.discountPercentage || 0),
      stockQuantity: Number(v.stockQuantity || 0),
      images: v.images ? v.images.split(',').map((s: string) => s.trim()).filter((s: string) => s) : [],
      features: featuresObj
    };

    if (this.editingProductId) {
      this.adminService.updateProduct(this.editingProductId, payload).subscribe({
        next: (p) => {
          const index = this.products.findIndex(prod => prod._id === this.editingProductId);
          if (index !== -1) {
            this.products[index] = p;
          }
          this.addingProduct = false;
          this.toast.success('Product updated successfully.');
          this.closeAddForm();
        },
        error: (err) => {
          this.toast.error(err?.error?.message || 'Failed to update product.');
          this.addingProduct = false;
        }
      });
    } else {
      this.adminService.createProduct(payload).subscribe({
        next: (p) => {
          this.products = [p, ...this.products];
          this.addingProduct = false;
          this.toast.success('Product created successfully.');
          this.closeAddForm();
        },
        error: (err) => {
          this.toast.error(err?.error?.message || 'Failed to create product.');
          this.addingProduct = false;
        }
      });
    }
  }

  viewOrderDetails(order: AdminOrder): void {
    this.selectedOrder = order;
    this.showOrderDetail = true;
  }

  closeOrderDetails(): void {
    this.showOrderDetail = false;
    this.selectedOrder = null;
  }

  getOrderUserEmail(order: AdminOrder): string {
    if (typeof order.userId === 'object' && order.userId !== null) {
      return (order.userId as any).email || '';
    }
    return '';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
