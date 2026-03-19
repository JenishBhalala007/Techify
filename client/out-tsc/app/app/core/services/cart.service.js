import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CartService {
    constructor() {
        this.items$ = new BehaviorSubject([]);
        this.cart$ = this.items$.asObservable();
    }
    get count() {
        return this.items$.value.reduce((sum, i) => sum + i.quantity, 0);
    }
    get total() {
        return this.items$.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    }
    add(product) {
        const items = [...this.items$.value];
        const existing = items.find(i => i.product.id === product.id);
        if (existing) {
            existing.quantity++;
        }
        else {
            items.push({ product, quantity: 1 });
        }
        this.items$.next(items);
    }
    remove(productId) {
        this.items$.next(this.items$.value.filter(i => i.product.id !== productId));
    }
    updateQty(productId, qty) {
        if (qty <= 0) {
            this.remove(productId);
            return;
        }
        const items = this.items$.value.map(i => i.product.id === productId ? { ...i, quantity: qty } : i);
        this.items$.next(items);
    }
    clear() { this.items$.next([]); }
    static { this.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=cart.service.js.map