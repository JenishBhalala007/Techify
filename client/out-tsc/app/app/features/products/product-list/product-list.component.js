import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/product.service";
import * as i2 from "../../../core/services/cart.service";
import * as i3 from "../../../shared/components/product-card/product-card.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ProductListComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 20)(1, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function ProductListComponent_label_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.selectedCategory, $event) || (ctx_r2.selectedCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProductListComponent_label_11_Template_input_change_1_listener() { const cat_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.filterByCategory(cat_r4)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.selectedCategory === cat_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", cat_r4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectedCategory);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cat_r4);
} }
function ProductListComponent_div_45_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product-card", 24);
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    i0.ɵɵproperty("product", product_r5);
} }
function ProductListComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, ProductListComponent_div_45_app_product_card_1_Template, 1, 1, "app-product-card", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.filteredProducts);
} }
function ProductListComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "p");
    i0.ɵɵtext(2, "\uD83D\uDD0D No products match your filters.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 26);
    i0.ɵɵlistener("click", function ProductListComponent_ng_template_46_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.selectedCategory = "All"; return i0.ɵɵresetView(ctx_r2.applyFilters()); });
    i0.ɵɵtext(4, " Clear Filters ");
    i0.ɵɵelementEnd()();
} }
function ProductListComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 28);
    i0.ɵɵtext(4, "Compare Now");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 29);
    i0.ɵɵlistener("click", function ProductListComponent_div_48_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.compareList = []); });
    i0.ɵɵtext(6, "Clear");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Comparing ", ctx_r2.compareList.length, " item(s)");
} }
export class ProductListComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.allProducts = [];
        this.filteredProducts = [];
        this.selectedCategory = 'All';
        this.priceMax = 1000;
        this.compareList = [];
        this.categories = ['All', 'Keyboards', 'Mice', 'Audio', 'Monitors'];
    }
    ngOnInit() {
        this.allProducts = this.productService.getAll();
        this.filteredProducts = [...this.allProducts];
    }
    filterByCategory(cat) {
        this.selectedCategory = cat;
        this.applyFilters();
    }
    applyFilters() {
        let products = this.allProducts;
        if (this.selectedCategory !== 'All') {
            products = products.filter(p => p.category === this.selectedCategory);
        }
        products = products.filter(p => p.price <= this.priceMax);
        this.filteredProducts = products;
    }
    toggleCompare(id) {
        const idx = this.compareList.indexOf(id);
        if (idx > -1) {
            this.compareList.splice(idx, 1);
        }
        else if (this.compareList.length < 3) {
            this.compareList.push(id);
        }
    }
    isInCompare(id) { return this.compareList.includes(id); }
    static { this.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(i0.ɵɵdirectiveInject(i1.ProductService), i0.ɵɵdirectiveInject(i2.CartService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 49, vars: 7, consts: [["noResults", ""], [1, "products-page"], [1, "container"], [1, "products-layout"], [1, "sidebar"], [1, "sidebar-card"], [1, "sidebar-title"], [1, "filter-group"], [1, "filter-options"], ["class", "filter-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "price-val"], ["type", "range", "min", "50", "max", "1200", "step", "10", 1, "price-slider", 3, "ngModelChange", "input", "ngModel"], [1, "price-labels"], [1, "checkbox-item"], ["type", "checkbox", "checked", ""], [1, "products-main"], [1, "products-header"], [1, "sort-select"], ["class", "products-grid", 4, "ngIf", "ngIfElse"], ["class", "compare-widget", 4, "ngIf"], [1, "filter-item"], ["type", "radio", "name", "category", 3, "ngModelChange", "change", "value", "ngModel"], [1, "products-grid"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "no-results"], [1, "btn-primary", 3, "click"], [1, "compare-widget"], [1, "btn-compare"], [1, "btn-clear", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "aside", 4)(4, "div", 5)(5, "h3", 6);
            i0.ɵɵtext(6, "Filters");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "h4");
            i0.ɵɵtext(9, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵtemplate(11, ProductListComponent_label_11_Template, 4, 5, "label", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 7)(13, "h4");
            i0.ɵɵtext(14, "Max Price: ");
            i0.ɵɵelementStart(15, "span", 10);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.priceMax, $event) || (ctx.priceMax = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function ProductListComponent_Template_input_input_17_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.applyFilters()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 12)(19, "span");
            i0.ɵɵtext(20, "$50");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span");
            i0.ɵɵtext(22, "$1200");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "div", 7)(24, "h4");
            i0.ɵɵtext(25, "Availability");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "label", 13);
            i0.ɵɵelement(27, "input", 14);
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29, "In Stock Only");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(30, "main", 15)(31, "div", 16)(32, "h1");
            i0.ɵɵtext(33, "All Products ");
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "select", 17)(37, "option");
            i0.ɵɵtext(38, "Sort: Featured");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "option");
            i0.ɵɵtext(40, "Price: Low to High");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "option");
            i0.ɵɵtext(42, "Price: High to Low");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "option");
            i0.ɵɵtext(44, "Best Rated");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(45, ProductListComponent_div_45_Template, 2, 1, "div", 18)(46, ProductListComponent_ng_template_46_Template, 5, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(48, ProductListComponent_div_48_Template, 7, 1, "div", 19);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const noResults_r8 = i0.ɵɵreference(47);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("$", ctx.priceMax, "");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.priceMax);
            i0.ɵɵadvance(18);
            i0.ɵɵtextInterpolate1("(", ctx.filteredProducts.length, ")");
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", ctx.filteredProducts.length > 0)("ngIfElse", noResults_r8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.compareList.length > 0);
        } }, dependencies: [i3.ProductCardComponent, i4.NgForOf, i4.NgIf, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.RangeValueAccessor, i5.RadioControlValueAccessor, i5.NgControlStatus, i5.NgModel], styles: ["@import '../../../../styles/variables';\r\n\r\n.products-page[_ngcontent-%COMP%] {\r\n  padding: 40px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.products-layout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 280px 1fr;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n\n\r\n.sidebar-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 24px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n}\r\n\r\n.sidebar-title[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 24px;\r\n  padding-bottom: 16px;\r\n  border-bottom: 1px solid $border-color;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 28px;\r\n  padding-bottom: 28px;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  &:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }\r\n\r\n  h4 {\r\n    font-family: $font-heading;\r\n    font-size: 0.85rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.06em;\r\n    color: $text-primary;\r\n    margin-bottom: 14px;\r\n  }\r\n}\r\n\r\n.filter-options[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\r\n\r\n.filter-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 8px 12px;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  transition: all $transition-fast;\r\n\r\n  input[type=\"radio\"] { display: none; }\r\n\r\n  span {\r\n    font-size: 0.9rem;\r\n    color: $text-muted;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &:hover, &.active {\r\n    background: $highlight;\r\n    span { color: $primary-color; }\r\n  }\r\n\r\n  &.active span { font-weight: 600; }\r\n}\r\n\r\n.price-val[_ngcontent-%COMP%] {\r\n  color: $primary-color;\r\n  font-weight: 600;\r\n  font-family: $font-heading;\r\n}\r\n\r\n.price-slider[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  accent-color: $primary-color;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.price-labels[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.78rem;\r\n  color: $text-muted;\r\n}\r\n\r\n.checkbox-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  cursor: pointer;\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n\r\n  input[type=\"checkbox\"] { accent-color: $primary-color; }\r\n}\r\n\r\n\n\r\n.products-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 28px;\r\n\r\n  h1 {\r\n    font-family: $font-heading;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n\r\n    span {\r\n      font-size: 1rem;\r\n      font-weight: 500;\r\n      color: $text-muted;\r\n      margin-left: 4px;\r\n    }\r\n  }\r\n}\r\n\r\n.sort-select[_ngcontent-%COMP%] {\r\n  padding: 8px 16px;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  font-family: $font-body;\r\n  font-size: 0.9rem;\r\n  color: $text-primary;\r\n  background: $surface;\r\n  cursor: pointer;\r\n  transition: border-color $transition-base;\r\n\r\n  &:focus { border-color: $primary-color; outline: none; }\r\n}\r\n\r\n.products-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n}\r\n\r\n.no-results[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 60px 20px;\r\n\r\n  p {\r\n    font-size: 1.1rem;\r\n    color: $text-muted;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .btn-primary {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    background: $primary-color;\r\n    color: white;\r\n    font-family: $font-heading;\r\n    font-weight: 600;\r\n    padding: 12px 24px;\r\n    border-radius: $radius-pill;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n\n\r\n.compare-widget[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background: white;\r\n  backdrop-filter: blur(16px);\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-pill;\r\n  padding: 14px 24px;\r\n  box-shadow: $shadow-lg;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  z-index: 100;\r\n  animation: _ngcontent-%COMP%_slide-up 0.3s ease;\r\n\r\n  span {\r\n    font-family: $font-heading;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n.btn-compare[_ngcontent-%COMP%] {\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.85rem;\r\n  padding: 8px 20px;\r\n  border-radius: $radius-pill;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n  &:hover { background: darken(#6366F1, 8%); }\r\n}\r\n\r\n.btn-clear[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  color: $text-muted;\r\n  font-size: 0.85rem;\r\n  cursor: pointer;\r\n  &:hover { color: $text-primary; }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slide-up {\r\n  from { transform: translateX(-50%) translateY(20px); opacity: 0; }\r\n  to { transform: translateX(-50%) translateY(0); opacity: 1; }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .products-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .products-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .sidebar-card[_ngcontent-%COMP%] { position: static; }\r\n  .products-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .products-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductListComponent, [{
        type: Component,
        args: [{ selector: 'app-product-list', template: "<div class=\"products-page\">\r\n  <div class=\"container\">\r\n    <div class=\"products-layout\">\r\n\r\n      <!-- ============ SIDEBAR ============ -->\r\n      <aside class=\"sidebar\">\r\n        <div class=\"sidebar-card\">\r\n          <h3 class=\"sidebar-title\">Filters</h3>\r\n\r\n          <!-- Category -->\r\n          <div class=\"filter-group\">\r\n            <h4>Category</h4>\r\n            <div class=\"filter-options\">\r\n              <label\r\n                class=\"filter-item\"\r\n                *ngFor=\"let cat of categories\"\r\n                [class.active]=\"selectedCategory === cat\">\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"category\"\r\n                  [value]=\"cat\"\r\n                  [(ngModel)]=\"selectedCategory\"\r\n                  (change)=\"filterByCategory(cat)\" />\r\n                <span>{{ cat }}</span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Price Range -->\r\n          <div class=\"filter-group\">\r\n            <h4>Max Price: <span class=\"price-val\">${{ priceMax }}</span></h4>\r\n            <input\r\n              type=\"range\"\r\n              class=\"price-slider\"\r\n              min=\"50\" max=\"1200\" step=\"10\"\r\n              [(ngModel)]=\"priceMax\"\r\n              (input)=\"applyFilters()\" />\r\n            <div class=\"price-labels\">\r\n              <span>$50</span>\r\n              <span>$1200</span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- In Stock -->\r\n          <div class=\"filter-group\">\r\n            <h4>Availability</h4>\r\n            <label class=\"checkbox-item\">\r\n              <input type=\"checkbox\" checked />\r\n              <span>In Stock Only</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </aside>\r\n\r\n      <!-- ============ MAIN GRID ============ -->\r\n      <main class=\"products-main\">\r\n        <div class=\"products-header\">\r\n          <h1>All Products <span>({{ filteredProducts.length }})</span></h1>\r\n          <select class=\"sort-select\">\r\n            <option>Sort: Featured</option>\r\n            <option>Price: Low to High</option>\r\n            <option>Price: High to Low</option>\r\n            <option>Best Rated</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"products-grid\" *ngIf=\"filteredProducts.length > 0; else noResults\">\r\n          <app-product-card\r\n            *ngFor=\"let product of filteredProducts\"\r\n            [product]=\"product\">\r\n          </app-product-card>\r\n        </div>\r\n\r\n        <ng-template #noResults>\r\n          <div class=\"no-results\">\r\n            <p>\uD83D\uDD0D No products match your filters.</p>\r\n            <button class=\"btn-primary\" (click)=\"selectedCategory='All'; applyFilters()\">\r\n              Clear Filters\r\n            </button>\r\n          </div>\r\n        </ng-template>\r\n      </main>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Compare Widget -->\r\n  <div class=\"compare-widget\" *ngIf=\"compareList.length > 0\">\r\n    <span>Comparing {{ compareList.length }} item(s)</span>\r\n    <button class=\"btn-compare\">Compare Now</button>\r\n    <button class=\"btn-clear\" (click)=\"compareList=[]\">Clear</button>\r\n  </div>\r\n</div>\r\n", styles: ["@import '../../../../styles/variables';\r\n\r\n.products-page {\r\n  padding: 40px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.products-layout {\r\n  display: grid;\r\n  grid-template-columns: 280px 1fr;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n/* ===== SIDEBAR ===== */\r\n.sidebar-card {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 24px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n}\r\n\r\n.sidebar-title {\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 24px;\r\n  padding-bottom: 16px;\r\n  border-bottom: 1px solid $border-color;\r\n}\r\n\r\n.filter-group {\r\n  margin-bottom: 28px;\r\n  padding-bottom: 28px;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  &:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }\r\n\r\n  h4 {\r\n    font-family: $font-heading;\r\n    font-size: 0.85rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.06em;\r\n    color: $text-primary;\r\n    margin-bottom: 14px;\r\n  }\r\n}\r\n\r\n.filter-options { display: flex; flex-direction: column; gap: 6px; }\r\n\r\n.filter-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 8px 12px;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  transition: all $transition-fast;\r\n\r\n  input[type=\"radio\"] { display: none; }\r\n\r\n  span {\r\n    font-size: 0.9rem;\r\n    color: $text-muted;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &:hover, &.active {\r\n    background: $highlight;\r\n    span { color: $primary-color; }\r\n  }\r\n\r\n  &.active span { font-weight: 600; }\r\n}\r\n\r\n.price-val {\r\n  color: $primary-color;\r\n  font-weight: 600;\r\n  font-family: $font-heading;\r\n}\r\n\r\n.price-slider {\r\n  width: 100%;\r\n  accent-color: $primary-color;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.price-labels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.78rem;\r\n  color: $text-muted;\r\n}\r\n\r\n.checkbox-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  cursor: pointer;\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n\r\n  input[type=\"checkbox\"] { accent-color: $primary-color; }\r\n}\r\n\r\n/* ===== MAIN ===== */\r\n.products-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 28px;\r\n\r\n  h1 {\r\n    font-family: $font-heading;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n\r\n    span {\r\n      font-size: 1rem;\r\n      font-weight: 500;\r\n      color: $text-muted;\r\n      margin-left: 4px;\r\n    }\r\n  }\r\n}\r\n\r\n.sort-select {\r\n  padding: 8px 16px;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  font-family: $font-body;\r\n  font-size: 0.9rem;\r\n  color: $text-primary;\r\n  background: $surface;\r\n  cursor: pointer;\r\n  transition: border-color $transition-base;\r\n\r\n  &:focus { border-color: $primary-color; outline: none; }\r\n}\r\n\r\n.products-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n}\r\n\r\n.no-results {\r\n  text-align: center;\r\n  padding: 60px 20px;\r\n\r\n  p {\r\n    font-size: 1.1rem;\r\n    color: $text-muted;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .btn-primary {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    background: $primary-color;\r\n    color: white;\r\n    font-family: $font-heading;\r\n    font-weight: 600;\r\n    padding: 12px 24px;\r\n    border-radius: $radius-pill;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n/* Compare Widget */\r\n.compare-widget {\r\n  position: fixed;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background: white;\r\n  backdrop-filter: blur(16px);\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-pill;\r\n  padding: 14px 24px;\r\n  box-shadow: $shadow-lg;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  z-index: 100;\r\n  animation: slide-up 0.3s ease;\r\n\r\n  span {\r\n    font-family: $font-heading;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n.btn-compare {\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.85rem;\r\n  padding: 8px 20px;\r\n  border-radius: $radius-pill;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n  &:hover { background: darken(#6366F1, 8%); }\r\n}\r\n\r\n.btn-clear {\r\n  background: none;\r\n  border: none;\r\n  color: $text-muted;\r\n  font-size: 0.85rem;\r\n  cursor: pointer;\r\n  &:hover { color: $text-primary; }\r\n}\r\n\r\n@keyframes slide-up {\r\n  from { transform: translateX(-50%) translateY(20px); opacity: 0; }\r\n  to { transform: translateX(-50%) translateY(0); opacity: 1; }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .products-grid { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .products-layout { grid-template-columns: 1fr; }\r\n  .sidebar-card { position: static; }\r\n  .products-grid { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .products-grid { grid-template-columns: 1fr; }\r\n}\r\n"] }]
    }], () => [{ type: i1.ProductService }, { type: i2.CartService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src\\app\\features\\products\\product-list\\product-list.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=product-list.component.js.map