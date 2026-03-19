import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => { this.cartItems = items; });
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => {
      const original = item.product.originalPrice ?? item.product.price;
      return sum + original * item.quantity;
    }, 0);
  }
  get shipping(): number { return this.cartItems.length === 0 ? 0 : (this.subtotal > 4000 ? 0 : 499); }
  get discount(): number {
    return this.cartItems.reduce((sum, item) => {
      if (item.product.originalPrice && item.product.originalPrice > item.product.price) {
        return sum + (item.product.originalPrice - item.product.price) * item.quantity;
      }
      return sum;
    }, 0);
  }
  get total(): number { return this.subtotal - this.discount + this.shipping; }

  updateQty(id: number, qty: number): void { this.cartService.updateQty(id, qty); }
  remove(id: number): void { this.cartService.remove(id); }
}
