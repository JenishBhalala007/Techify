import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/cart.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function CartViewComponent_div_4_div_2_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tag_r2);
} }
function CartViewComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵelement(2, "img", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23)(4, "p", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3", 25);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 26);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 27);
    i0.ɵɵtemplate(11, CartViewComponent_div_4_div_2_span_11_Template, 2, 1, "span", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 29)(13, "div", 30)(14, "button", 31);
    i0.ɵɵlistener("click", function CartViewComponent_div_4_div_2_Template_button_click_14_listener() { const item_r3 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.updateQty(item_r3.product.id, item_r3.quantity - 1)); });
    i0.ɵɵtext(15, "\u2212");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 31);
    i0.ɵɵlistener("click", function CartViewComponent_div_4_div_2_Template_button_click_18_listener() { const item_r3 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.updateQty(item_r3.product.id, item_r3.quantity + 1)); });
    i0.ɵɵtext(19, "+");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p", 32);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 33);
    i0.ɵɵlistener("click", function CartViewComponent_div_4_div_2_Template_button_click_22_listener() { const item_r3 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.remove(item_r3.product.id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(23, "svg", 34);
    i0.ɵɵelement(24, "polyline", 35)(25, "path", 36)(26, "path", 37)(27, "path", 38);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r3.product.image, i0.ɵɵsanitizeUrl)("alt", item_r3.product.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.product.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.product.brand);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r3.product.tags);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r3.quantity);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("$", (item_r3.product.price * item_r3.quantity).toFixed(2), "");
} }
function CartViewComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "span");
    i0.ɵɵtext(2, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 40);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\u2212$", ctx_r3.discount.toFixed(2), "");
} }
function CartViewComponent_div_4_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("$", ctx_r3.shipping.toFixed(2), "");
} }
function CartViewComponent_div_4_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1, "FREE");
    i0.ɵɵelementEnd();
} }
function CartViewComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Add $", (75 - ctx_r3.subtotal).toFixed(2), " more for free shipping! ");
} }
function CartViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵtemplate(2, CartViewComponent_div_4_div_2_Template, 28, 8, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "aside", 8)(4, "h2");
    i0.ɵɵtext(5, "Order Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9)(7, "div", 10)(8, "span");
    i0.ɵɵtext(9, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CartViewComponent_div_4_div_12_Template, 5, 1, "div", 11);
    i0.ɵɵelementStart(13, "div", 10)(14, "span");
    i0.ɵɵtext(15, "Shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, CartViewComponent_div_4_span_16_Template, 2, 1, "span", 12)(17, CartViewComponent_div_4_span_17_Template, 2, 0, "span", 13);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, CartViewComponent_div_4_div_18_Template, 2, 1, "div", 14);
    i0.ɵɵelementStart(19, "div", 15)(20, "span");
    i0.ɵɵtext(21, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "a", 16);
    i0.ɵɵtext(25, " Proceed to Checkout ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(26, "svg", 17);
    i0.ɵɵelement(27, "path", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(28, "a", 19);
    i0.ɵɵtext(29, "\u2190 Continue Shopping");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.cartItems);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("$", ctx_r3.subtotal.toFixed(2), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.discount > 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r3.shipping > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.shipping === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.subtotal < 75);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("$", ctx_r3.total.toFixed(2), "");
} }
function CartViewComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43);
    i0.ɵɵtext(2, "\uD83D\uDED2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Your cart is empty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Looks like you haven't added anything yet.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 44);
    i0.ɵɵtext(8, "Start Shopping");
    i0.ɵɵelementEnd()();
} }
export class CartViewComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(items => { this.cartItems = items; });
    }
    get subtotal() { return this.cartService.total; }
    get shipping() { return this.subtotal > 75 ? 0 : 9.99; }
    get discount() { return this.subtotal > 200 ? 20 : 0; }
    get total() { return this.subtotal + this.shipping - this.discount; }
    updateQty(id, qty) { this.cartService.updateQty(id, qty); }
    remove(id) { this.cartService.remove(id); }
    static { this.ɵfac = function CartViewComponent_Factory(t) { return new (t || CartViewComponent)(i0.ɵɵdirectiveInject(i1.CartService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartViewComponent, selectors: [["app-cart-view"]], decls: 7, vars: 2, consts: [["emptyCart", ""], [1, "cart-page"], [1, "container"], [1, "page-title"], ["class", "cart-layout", 4, "ngIf", "ngIfElse"], [1, "cart-layout"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "order-summary"], [1, "summary-rows"], [1, "summary-row"], ["class", "summary-row", 4, "ngIf"], [4, "ngIf"], ["class", "green", 4, "ngIf"], ["class", "shipping-notice", 4, "ngIf"], [1, "summary-total"], ["routerLink", "/cart/checkout", 1, "checkout-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/products", 1, "continue-link"], [1, "cart-item"], [1, "item-image"], [3, "src", "alt"], [1, "item-info"], [1, "item-category"], [1, "item-name"], [1, "item-brand"], [1, "item-tags"], ["class", "pill-tag", 4, "ngFor", "ngForOf"], [1, "item-controls"], [1, "qty-control"], [3, "click"], [1, "item-price"], ["title", "Remove", 1, "remove-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "pill-tag"], [1, "green"], [1, "shipping-notice"], [1, "empty-cart"], [1, "empty-icon"], ["routerLink", "/products", 1, "btn-primary"]], template: function CartViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
            i0.ɵɵtext(3, "Shopping Cart");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CartViewComponent_div_4_Template, 30, 7, "div", 4)(5, CartViewComponent_ng_template_5_Template, 9, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const emptyCart_r5 = i0.ɵɵreference(6);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.cartItems.length > 0)("ngIfElse", emptyCart_r5);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.RouterLink], styles: ["@import '../../../../styles/variables';\r\n\r\n.cart-page[_ngcontent-%COMP%] {\r\n  padding: 40px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.cart-layout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 380px;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n\n\r\n.cart-items[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.cart-item[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 100px 1fr auto;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 24px;\r\n  box-shadow: $shadow-sm;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { box-shadow: $shadow-md; border-color: $border-accent; }\r\n}\r\n\r\n.item-image[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 80px;\r\n  border-radius: $radius-md;\r\n  overflow: hidden;\r\n  background: $bg-primary;\r\n\r\n  img { width: 100%; height: 100%; object-fit: cover; }\r\n}\r\n\r\n.item-info[_ngcontent-%COMP%] { flex: 1; }\r\n\r\n\r\n.item-category[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  color: $text-muted;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.item-name[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.item-brand[_ngcontent-%COMP%] {\r\n  font-size: 0.82rem;\r\n  color: $text-muted;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.item-tags[_ngcontent-%COMP%] { display: flex; gap: 6px; }\r\n\r\n.item-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 12px;\r\n}\r\n\r\n.qty-control[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  overflow: hidden;\r\n\r\n  button {\r\n    width: 32px;\r\n    height: 32px;\r\n    background: $bg-primary;\r\n    border: none;\r\n    font-size: 1.1rem;\r\n    color: $text-primary;\r\n    cursor: pointer;\r\n    transition: background $transition-fast;\r\n\r\n    &:hover { background: $highlight; color: $primary-color; }\r\n  }\r\n\r\n  span {\r\n    width: 36px;\r\n    text-align: center;\r\n    font-family: $font-heading;\r\n    font-weight: 600;\r\n    font-size: 0.95rem;\r\n    color: $text-primary;\r\n    border-left: 1.5px solid $border-color;\r\n    border-right: 1.5px solid $border-color;\r\n    line-height: 32px;\r\n  }\r\n}\r\n\r\n.item-price[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: $primary-color;\r\n}\r\n\r\n.remove-btn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  color: $text-muted;\r\n  cursor: pointer;\r\n  padding: 4px;\r\n  border-radius: $radius-sm;\r\n  transition: all $transition-fast;\r\n\r\n  &:hover { color: #EF4444; background: #FEF2F2; }\r\n}\r\n\r\n\n\r\n.order-summary[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 24px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.15rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 24px;\r\n    padding-bottom: 16px;\r\n    border-bottom: 1px solid $border-color;\r\n  }\r\n}\r\n\r\n.summary-rows[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.summary-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n\r\n  .green { color: #16A34A; font-weight: 600; }\r\n}\r\n\r\n.shipping-notice[_ngcontent-%COMP%] {\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  padding: 8px 12px;\r\n  border-radius: $radius-md;\r\n  margin-bottom: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.summary-total[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  padding-top: 16px;\r\n  border-top: 1.5px solid $border-color;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.checkout-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  width: 100%;\r\n  padding: 14px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  border-radius: $radius-md;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 18px rgba(99,102,241,0.40);\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: darken(#6366F1, 8%);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 28px rgba(99,102,241,0.50);\r\n  }\r\n}\r\n\r\n.continue-link[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 14px;\r\n  font-size: 0.88rem;\r\n  color: $text-muted;\r\n  text-decoration: none;\r\n  transition: color $transition-base;\r\n\r\n  &:hover { color: $primary-color; }\r\n}\r\n\r\n\n\r\n.empty-cart[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 80px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.empty-icon[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.empty-cart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n}\r\n\r\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: $text-muted; }\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  padding: 12px 28px;\r\n  border-radius: $radius-pill;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n  margin-top: 8px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cart-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .order-summary[_ngcontent-%COMP%] { position: static; }\r\n}\r\n@media (max-width: 640px) {\r\n  .cart-item[_ngcontent-%COMP%] { grid-template-columns: 80px 1fr; }\r\n  .item-controls[_ngcontent-%COMP%] { grid-column: 1/-1; flex-direction: row; align-items: center; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartViewComponent, [{
        type: Component,
        args: [{ selector: 'app-cart-view', template: "<div class=\"cart-page\">\r\n  <div class=\"container\">\r\n    <h1 class=\"page-title\">Shopping Cart</h1>\r\n\r\n    <div class=\"cart-layout\" *ngIf=\"cartItems.length > 0; else emptyCart\">\r\n      <!-- ===== Items List ===== -->\r\n      <div class=\"cart-items\">\r\n        <div class=\"cart-item\" *ngFor=\"let item of cartItems\">\r\n          <div class=\"item-image\">\r\n            <img [src]=\"item.product.image\" [alt]=\"item.product.name\" />\r\n          </div>\r\n          <div class=\"item-info\">\r\n            <p class=\"item-category\">{{ item.product.category }}</p>\r\n            <h3 class=\"item-name\">{{ item.product.name }}</h3>\r\n            <p class=\"item-brand\">{{ item.product.brand }}</p>\r\n            <div class=\"item-tags\">\r\n              <span class=\"pill-tag\" *ngFor=\"let tag of item.product.tags\">{{ tag }}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"item-controls\">\r\n            <div class=\"qty-control\">\r\n              <button (click)=\"updateQty(item.product.id, item.quantity - 1)\">\u2212</button>\r\n              <span>{{ item.quantity }}</span>\r\n              <button (click)=\"updateQty(item.product.id, item.quantity + 1)\">+</button>\r\n            </div>\r\n            <p class=\"item-price\">${{ (item.product.price * item.quantity).toFixed(2) }}</p>\r\n            <button class=\"remove-btn\" (click)=\"remove(item.product.id)\" title=\"Remove\">\r\n              <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n                <polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6\"/>\r\n                <path d=\"M10 11v6M14 11v6\"/><path d=\"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2\"/>\r\n              </svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ===== Order Summary ===== -->\r\n      <aside class=\"order-summary\">\r\n        <h2>Order Summary</h2>\r\n        <div class=\"summary-rows\">\r\n          <div class=\"summary-row\">\r\n            <span>Subtotal</span>\r\n            <span>${{ subtotal.toFixed(2) }}</span>\r\n          </div>\r\n          <div class=\"summary-row\" *ngIf=\"discount > 0\">\r\n            <span>Discount</span>\r\n            <span class=\"green\">\u2212${{ discount.toFixed(2) }}</span>\r\n          </div>\r\n          <div class=\"summary-row\">\r\n            <span>Shipping</span>\r\n            <span *ngIf=\"shipping > 0\">${{ shipping.toFixed(2) }}</span>\r\n            <span *ngIf=\"shipping === 0\" class=\"green\">FREE</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"shipping-notice\" *ngIf=\"subtotal < 75\">\r\n          Add ${{ (75 - subtotal).toFixed(2) }} more for free shipping!\r\n        </div>\r\n        <div class=\"summary-total\">\r\n          <span>Total</span>\r\n          <span>${{ total.toFixed(2) }}</span>\r\n        </div>\r\n        <a routerLink=\"/cart/checkout\" class=\"checkout-btn\">\r\n          Proceed to Checkout\r\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\r\n            <path d=\"M5 12h14M12 5l7 7-7 7\"/>\r\n          </svg>\r\n        </a>\r\n        <a routerLink=\"/products\" class=\"continue-link\">\u2190 Continue Shopping</a>\r\n      </aside>\r\n    </div>\r\n\r\n    <!-- Empty State -->\r\n    <ng-template #emptyCart>\r\n      <div class=\"empty-cart\">\r\n        <div class=\"empty-icon\">\uD83D\uDED2</div>\r\n        <h2>Your cart is empty</h2>\r\n        <p>Looks like you haven't added anything yet.</p>\r\n        <a routerLink=\"/products\" class=\"btn-primary\">Start Shopping</a>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n", styles: ["@import '../../../../styles/variables';\r\n\r\n.cart-page {\r\n  padding: 40px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-title {\r\n  font-family: $font-heading;\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.cart-layout {\r\n  display: grid;\r\n  grid-template-columns: 1fr 380px;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n/* ===== Cart Items ===== */\r\n.cart-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.cart-item {\r\n  display: grid;\r\n  grid-template-columns: 100px 1fr auto;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 24px;\r\n  box-shadow: $shadow-sm;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { box-shadow: $shadow-md; border-color: $border-accent; }\r\n}\r\n\r\n.item-image {\r\n  width: 100px;\r\n  height: 80px;\r\n  border-radius: $radius-md;\r\n  overflow: hidden;\r\n  background: $bg-primary;\r\n\r\n  img { width: 100%; height: 100%; object-fit: cover; }\r\n}\r\n\r\n.item-info { flex: 1; }\r\n\r\n\r\n.item-category {\r\n  font-size: 0.75rem;\r\n  color: $text-muted;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.item-name {\r\n  font-family: $font-heading;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.item-brand {\r\n  font-size: 0.82rem;\r\n  color: $text-muted;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.item-tags { display: flex; gap: 6px; }\r\n\r\n.item-controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 12px;\r\n}\r\n\r\n.qty-control {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  overflow: hidden;\r\n\r\n  button {\r\n    width: 32px;\r\n    height: 32px;\r\n    background: $bg-primary;\r\n    border: none;\r\n    font-size: 1.1rem;\r\n    color: $text-primary;\r\n    cursor: pointer;\r\n    transition: background $transition-fast;\r\n\r\n    &:hover { background: $highlight; color: $primary-color; }\r\n  }\r\n\r\n  span {\r\n    width: 36px;\r\n    text-align: center;\r\n    font-family: $font-heading;\r\n    font-weight: 600;\r\n    font-size: 0.95rem;\r\n    color: $text-primary;\r\n    border-left: 1.5px solid $border-color;\r\n    border-right: 1.5px solid $border-color;\r\n    line-height: 32px;\r\n  }\r\n}\r\n\r\n.item-price {\r\n  font-family: $font-heading;\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: $primary-color;\r\n}\r\n\r\n.remove-btn {\r\n  background: none;\r\n  border: none;\r\n  color: $text-muted;\r\n  cursor: pointer;\r\n  padding: 4px;\r\n  border-radius: $radius-sm;\r\n  transition: all $transition-fast;\r\n\r\n  &:hover { color: #EF4444; background: #FEF2F2; }\r\n}\r\n\r\n/* ===== Order Summary ===== */\r\n.order-summary {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 24px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.15rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 24px;\r\n    padding-bottom: 16px;\r\n    border-bottom: 1px solid $border-color;\r\n  }\r\n}\r\n\r\n.summary-rows {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.summary-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n\r\n  .green { color: #16A34A; font-weight: 600; }\r\n}\r\n\r\n.shipping-notice {\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  padding: 8px 12px;\r\n  border-radius: $radius-md;\r\n  margin-bottom: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.summary-total {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  padding-top: 16px;\r\n  border-top: 1.5px solid $border-color;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.checkout-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  width: 100%;\r\n  padding: 14px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  border-radius: $radius-md;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 18px rgba(99,102,241,0.40);\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: darken(#6366F1, 8%);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 28px rgba(99,102,241,0.50);\r\n  }\r\n}\r\n\r\n.continue-link {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 14px;\r\n  font-size: 0.88rem;\r\n  color: $text-muted;\r\n  text-decoration: none;\r\n  transition: color $transition-base;\r\n\r\n  &:hover { color: $primary-color; }\r\n}\r\n\r\n/* Empty State */\r\n.empty-cart {\r\n  text-align: center;\r\n  padding: 80px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.empty-icon {\r\n  font-size: 4rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.empty-cart h2 {\r\n  font-family: $font-heading;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n}\r\n\r\n.empty-cart p { color: $text-muted; }\r\n\r\n.btn-primary {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  padding: 12px 28px;\r\n  border-radius: $radius-pill;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n  margin-top: 8px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cart-layout { grid-template-columns: 1fr; }\r\n  .order-summary { position: static; }\r\n}\r\n@media (max-width: 640px) {\r\n  .cart-item { grid-template-columns: 80px 1fr; }\r\n  .item-controls { grid-column: 1/-1; flex-direction: row; align-items: center; }\r\n}\r\n"] }]
    }], () => [{ type: i1.CartService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CartViewComponent, { className: "CartViewComponent", filePath: "src\\app\\features\\cart\\cart-view\\cart-view.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=cart-view.component.js.map