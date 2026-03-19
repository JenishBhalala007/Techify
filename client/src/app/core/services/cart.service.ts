import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([]);
  readonly cart$ = this.items$.asObservable();

  constructor(private auth: AuthService, private toast: ToastService) {}

  get count(): number {
    return this.items$.value.reduce((sum, i) => sum + i.quantity, 0);
  }

  get total(): number {
    return this.items$.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  add(product: Product): void {
    if (!this.auth.isLoggedIn()) {
      this.toast.error('Please log in first to add items to your cart.');
      return;
    }
    const items = [...this.items$.value];
    const existing = items.find(i => i.product.id === product.id);
    if (existing) { existing.quantity++; }
    else { items.push({ product, quantity: 1 }); }
    this.items$.next(items);
  }

  remove(productId: any): void {
    this.items$.next(this.items$.value.filter(i => i.product.id !== productId));
  }

  updateQty(productId: any, qty: number): void {
    if (qty <= 0) { this.remove(productId); return; }
    const items = this.items$.value.map(i =>
      i.product.id === productId ? { ...i, quantity: qty } : i
    );
    this.items$.next(items);
  }

  clear(): void { this.items$.next([]); }
}
