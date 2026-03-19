import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService, CartItem } from '../../../core/services/cart.service';
import { OrderService } from '../../../core/services/order.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  currentStep = 1;
  cartItems: CartItem[] = [];
  addressForm!: FormGroup;
  paymentForm!: FormGroup;
  placingOrder = false;
  orderError = '';
  confirmedOrderId = '';
  confirmedItems: CartItem[] = [];
  private cartSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(items => { this.cartItems = items; });

    const user = this.authService.getCurrentUser();
    const addr = user?.address || {};

    this.addressForm = this.fb.group({
      firstName: [user?.name?.split(' ')[0] || '', Validators.required],
      lastName:  [user?.name?.split(' ').slice(1).join(' ') || '', Validators.required],
      email:     [user?.email || '', [Validators.required, Validators.email]],
      street:    [addr.street || '', Validators.required],
      city:      [addr.city || '', Validators.required],
      state:     [addr.state || '', Validators.required],
      zipCode:   [addr.zipCode || '', Validators.required],
      country:   [addr.country || 'India', Validators.required],
      phone:     [user?.phone || '']
    });

    this.paymentForm = this.fb.group({
      method: ['cod', Validators.required],
      cardNumber: [''],
      expiry:     [''],
      cvv:        ['']
    });

    // Dynamic validation for card fields based on method
    this.paymentForm.get('method')?.valueChanges.subscribe(method => {
      const cardFields = ['cardNumber', 'expiry', 'cvv'];
      if (method === 'card') {
        cardFields.forEach(field => {
          this.paymentForm.get(field)?.setValidators([Validators.required]);
          this.paymentForm.get(field)?.updateValueAndValidity();
        });
      } else {
        cardFields.forEach(field => {
          this.paymentForm.get(field)?.clearValidators();
          this.paymentForm.get(field)?.updateValueAndValidity();
        });
      }
    });
  }

  ngOnDestroy(): void { this.cartSub?.unsubscribe(); }

  get subtotal(): number {
    return this.cartItems.reduce((s, i) => {
      const orig = i.product.originalPrice ?? i.product.price;
      return s + orig * i.quantity;
    }, 0);
  }
  get discount(): number {
    return this.cartItems.reduce((s, i) => {
      if (i.product.originalPrice && i.product.originalPrice > i.product.price) {
        return s + (i.product.originalPrice - i.product.price) * i.quantity;
      }
      return s;
    }, 0);
  }
  get shipping(): number { return this.subtotal - this.discount > 4000 ? 0 : 499; }
  get total(): number { return this.subtotal - this.discount + this.shipping; }

  goToPayment(): void {
    if (this.addressForm.invalid) { this.addressForm.markAllAsTouched(); return; }
    this.currentStep = 2;
  }

  goToReview(): void {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    this.currentStep = 3;
  }

  placeOrder(): void {
    if (this.cartItems.length === 0) return;
    this.placingOrder = true;
    this.orderError = '';

    const a = this.addressForm.value;
    const shippingAddress = {
      street: a.street,
      city: a.city,
      state: a.state,
      zipCode: a.zipCode,
      country: a.country
    };

    const paymentMethod = this.paymentForm.value.method === 'card' ? 'Credit Card' : 'Cash on Delivery';

    const orderItems = this.cartItems.map(item => ({
      productId: item.product.id,
      quantity: item.quantity
    }));

    this.orderService.createOrder({ shippingAddress, paymentMethod, orderItems }).subscribe({
      next: (order) => {
        this.confirmedOrderId = order._id;
        this.confirmedItems = [...this.cartItems]; // snapshot before clear
        this.cartService.clear();
        this.currentStep = 4;
        this.placingOrder = false;
      },
      error: (err) => {
        this.orderError = err?.error?.message || 'Failed to place order. Please try again.';
        this.placingOrder = false;
      }
    });
  }

  isFieldInvalid(form: FormGroup, field: string): boolean {
    const c = form.get(field);
    return !!(c && c.invalid && c.touched);
  }
}
