import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/cart.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function ProductCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getDiscount(), "% OFF ");
} }
function ProductCardComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tag_r2);
} }
function ProductCardComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" $", ctx_r0.product.originalPrice.toFixed(2), " ");
} }
export class ProductCardComponent {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    goToProduct() {
        this.router.navigate(['/products']);
    }
    addToCart(e) {
        e.stopPropagation();
        this.cartService.add(this.product);
    }
    getDiscount() {
        if (!this.product.originalPrice)
            return 0;
        return Math.round((1 - this.product.price / this.product.originalPrice) * 100);
    }
    static { this.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(i0.ɵɵdirectiveInject(i1.CartService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 28, vars: 10, consts: [[1, "product-card", 3, "click"], [1, "card-image"], ["loading", "lazy", 3, "src", "alt"], ["class", "card-badge", 4, "ngIf"], [1, "card-content"], [1, "card-meta"], [1, "card-category"], [1, "card-rating"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "#F59E0B"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "card-title"], [1, "card-brand"], [1, "card-tags"], ["class", "pill-tag", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "card-price"], [1, "price-current"], ["class", "price-original", 4, "ngIf"], ["title", "Add to Cart", 1, "add-to-cart", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "card-badge"], [1, "pill-tag"], [1, "price-original"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function ProductCardComponent_Template_div_click_0_listener() { return ctx.goToProduct(); });
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵtemplate(3, ProductCardComponent_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(9, "svg", 8);
            i0.ɵɵelement(10, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "h3", 10);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p", 11);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵtemplate(18, ProductCardComponent_span_18_Template, 2, 1, "span", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, ProductCardComponent_span_23_Template, 2, 1, "span", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 18);
            i0.ɵɵlistener("click", function ProductCardComponent_Template_button_click_24_listener($event) { return ctx.addToCart($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(25, "svg", 19);
            i0.ɵɵelement(26, "line", 20)(27, "line", 21);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.product.image, i0.ɵɵsanitizeUrl)("alt", ctx.product.name);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.product.originalPrice);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.product.category);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.product.rating);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.product.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.product.brand);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.product.tags);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("$", ctx.product.price.toFixed(2), "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.product.originalPrice);
        } }, dependencies: [i3.NgForOf, i3.NgIf], styles: ["@import '../../../../styles/variables';\r\n\r\n.product-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border-radius: $radius-lg;\r\n  border: 1px solid $border-color;\r\n  box-shadow: $shadow-md;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  &:hover {\r\n    box-shadow: $shadow-lg;\r\n    border-color: $border-accent;\r\n    transform: translateY(-4px);\r\n\r\n    .card-image img {\r\n      transform: scale(1.04);\r\n    }\r\n\r\n    .add-to-cart {\r\n      background: darken(#6366F1, 8%);\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: $bg-primary;\r\n  height: 220px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.4s ease;\r\n  }\r\n}\r\n\r\n.card-badge[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 12px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  padding: 3px 10px;\r\n  border-radius: $radius-pill;\r\n  letter-spacing: 0.03em;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n  padding: 16px 18px 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  flex: 1;\r\n}\r\n\r\n.card-meta[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.card-category[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  color: $text-muted;\r\n  font-weight: 500;\r\n}\r\n\r\n.card-rating[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3px;\r\n\r\n  span {\r\n    font-size: 0.75rem;\r\n    color: $text-muted;\r\n    font-weight: 500;\r\n  }\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 0.95rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 0;\r\n}\r\n\r\n.card-brand[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: $text-muted;\r\n  margin: 0;\r\n}\r\n\r\n.card-tags[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 6px;\r\n  flex-wrap: wrap;\r\n\r\n  .pill-tag {\r\n    font-size: 0.72rem;\r\n    padding: 2px 8px;\r\n  }\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: auto;\r\n  padding-top: 8px;\r\n}\r\n\r\n.card-price[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: baseline;\r\n  gap: 8px;\r\n}\r\n\r\n.price-current[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  color: $primary-color;\r\n}\r\n\r\n.price-original[_ngcontent-%COMP%] {\r\n  font-size: 0.85rem;\r\n  color: $text-muted;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.add-to-cart[_ngcontent-%COMP%] {\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 50%;\r\n  background: $primary-color;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: darken(#6366F1, 10%);\r\n    box-shadow: 0 6px 18px rgba(99, 102, 241, 0.45);\r\n    transform: scale(1.1);\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductCardComponent, [{
        type: Component,
        args: [{ selector: 'app-product-card', template: `
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
            <span class="price-current">\${{ product.price.toFixed(2) }}</span>
            <span class="price-original" *ngIf="product.originalPrice">
              \${{ product.originalPrice.toFixed(2) }}
            </span>
          </div>
          <button class="add-to-cart" (click)="addToCart($event)" title="Add to Cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["@import '../../../../styles/variables';\r\n\r\n.product-card {\r\n  background: $surface;\r\n  border-radius: $radius-lg;\r\n  border: 1px solid $border-color;\r\n  box-shadow: $shadow-md;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  &:hover {\r\n    box-shadow: $shadow-lg;\r\n    border-color: $border-accent;\r\n    transform: translateY(-4px);\r\n\r\n    .card-image img {\r\n      transform: scale(1.04);\r\n    }\r\n\r\n    .add-to-cart {\r\n      background: darken(#6366F1, 8%);\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  background: $bg-primary;\r\n  height: 220px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.4s ease;\r\n  }\r\n}\r\n\r\n.card-badge {\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 12px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  padding: 3px 10px;\r\n  border-radius: $radius-pill;\r\n  letter-spacing: 0.03em;\r\n}\r\n\r\n.card-content {\r\n  padding: 16px 18px 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  flex: 1;\r\n}\r\n\r\n.card-meta {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.card-category {\r\n  font-size: 0.75rem;\r\n  color: $text-muted;\r\n  font-weight: 500;\r\n}\r\n\r\n.card-rating {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3px;\r\n\r\n  span {\r\n    font-size: 0.75rem;\r\n    color: $text-muted;\r\n    font-weight: 500;\r\n  }\r\n}\r\n\r\n.card-title {\r\n  font-family: $font-heading;\r\n  font-size: 0.95rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 0;\r\n}\r\n\r\n.card-brand {\r\n  font-size: 0.8rem;\r\n  color: $text-muted;\r\n  margin: 0;\r\n}\r\n\r\n.card-tags {\r\n  display: flex;\r\n  gap: 6px;\r\n  flex-wrap: wrap;\r\n\r\n  .pill-tag {\r\n    font-size: 0.72rem;\r\n    padding: 2px 8px;\r\n  }\r\n}\r\n\r\n.card-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: auto;\r\n  padding-top: 8px;\r\n}\r\n\r\n.card-price {\r\n  display: flex;\r\n  align-items: baseline;\r\n  gap: 8px;\r\n}\r\n\r\n.price-current {\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  color: $primary-color;\r\n}\r\n\r\n.price-original {\r\n  font-size: 0.85rem;\r\n  color: $text-muted;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.add-to-cart {\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 50%;\r\n  background: $primary-color;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: darken(#6366F1, 10%);\r\n    box-shadow: 0 6px 18px rgba(99, 102, 241, 0.45);\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n"] }]
    }], () => [{ type: i1.CartService }, { type: i2.Router }], { product: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\shared\\components\\product-card\\product-card.component.ts", lineNumber: 57 }); })();
//# sourceMappingURL=product-card.component.js.map