import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/product.service";
import * as i2 from "@angular/common";
function AdminDashboardComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "span", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.label);
} }
function AdminDashboardComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28);
    i0.ɵɵelement(2, "img", 29);
    i0.ɵɵelementStart(3, "div")(4, "p", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 31);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "span", 32);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 33)(11, "div", 34);
    i0.ɵɵelement(12, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span", 36);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 37)(18, "button", 38);
    i0.ɵɵtext(19, "\u270F\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 39);
    i0.ɵɵtext(21, "\uD83D\uDDD1\uFE0F");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", p_r2.image, i0.ɵɵsanitizeUrl)("alt", p_r2.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.brand);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.category);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r2.getStock() + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.getStock(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", p_r2.price.toFixed(2), "");
} }
export class AdminDashboardComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.adminStats = [
            { value: '8', label: 'Total Products' },
            { value: '$4,892', label: 'Revenue Today' },
            { value: '147', label: 'Orders This Week' },
            { value: '98%', label: 'Fulfillment Rate' }
        ];
        this.products = this.productService.getAll();
    }
    getStock() { return Math.floor(Math.random() * 60) + 40; }
    static { this.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(i0.ɵɵdirectiveInject(i1.ProductService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 47, vars: 2, consts: [[1, "admin-page"], [1, "container"], [1, "admin-layout"], [1, "admin-sidebar"], [1, "admin-brand"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "3", "fill", "#6366F1"], ["x", "6", "y", "3", "width", "12", "height", "6", "rx", "2", "fill", "#A78BFA"], [1, "admin-nav"], [1, "active"], [1, "admin-main"], [1, "admin-header"], [1, "add-btn"], [1, "admin-stats"], ["class", "admin-stat", 4, "ngFor", "ngForOf"], [1, "admin-table-card"], [1, "table-search"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#6B7280", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search products..."], [1, "prod-table"], [1, "pt-header"], ["class", "pt-row", 4, "ngFor", "ngForOf"], [1, "admin-stat"], [1, "as-num"], [1, "as-lbl"], [1, "pt-row"], [1, "pt-product"], [3, "src", "alt"], [1, "pt-name"], [1, "pt-brand"], [1, "pt-cat"], [1, "pt-stock"], [1, "stock-bar"], [1, "stock-fill"], [1, "pt-price"], [1, "pt-actions"], [1, "edit-btn"], [1, "del-btn"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3)(4, "div", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "rect", 6)(7, "rect", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, " Admin Panel ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "nav", 8)(10, "a", 9);
            i0.ɵɵtext(11, "\uD83D\uDCE6 Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a");
            i0.ɵɵtext(13, "\uD83D\uDCCA Analytics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a");
            i0.ɵɵtext(15, "\uD83D\uDC65 Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "a");
            i0.ɵɵtext(17, "\uD83D\uDED2 Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a");
            i0.ɵɵtext(19, "\u2699\uFE0F Settings");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "main", 10)(21, "div", 11)(22, "h1");
            i0.ɵɵtext(23, "Product Management");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 12);
            i0.ɵɵtext(25, "+ Add New Product");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 13);
            i0.ɵɵtemplate(27, AdminDashboardComponent_div_27_Template, 5, 2, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 15)(29, "div", 16);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(30, "svg", 17);
            i0.ɵɵelement(31, "circle", 18)(32, "path", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(33, "input", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 21)(35, "div", 22)(36, "span");
            i0.ɵɵtext(37, "Product");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "span");
            i0.ɵɵtext(41, "Stock");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "span");
            i0.ɵɵtext(43, "Price");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "span");
            i0.ɵɵtext(45, "Actions");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(46, AdminDashboardComponent_div_46_Template, 22, 9, "div", 23);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(27);
            i0.ɵɵproperty("ngForOf", ctx.adminStats);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngForOf", ctx.products);
        } }, dependencies: [i2.NgForOf], styles: ["@import '../../../styles/variables';\r\n\r\n.admin-page[_ngcontent-%COMP%] { padding: 40px 0 80px; background: $bg-primary; min-height: 100vh; }\r\n\r\n.admin-layout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 220px 1fr;\r\n  gap: 28px;\r\n  align-items: start;\r\n}\r\n\r\n\n\r\n.admin-sidebar[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 24px 16px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n}\r\n\r\n.admin-brand[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-family: $font-heading;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  padding: 0 8px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.admin-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n\r\n  a {\r\n    display: block;\r\n    padding: 10px 12px;\r\n    border-radius: $radius-md;\r\n    font-size: 0.88rem;\r\n    font-weight: 500;\r\n    color: $text-muted;\r\n    cursor: pointer;\r\n    transition: all $transition-base;\r\n\r\n    &:hover { background: $highlight; color: $primary-color; }\r\n    &.active { background: $highlight; color: $primary-color; font-weight: 600; }\r\n  }\r\n}\r\n\r\n\n\r\n.admin-main[_ngcontent-%COMP%] { background: $surface; border: 1px solid $border-color; border-radius: $radius-lg; padding: 32px; box-shadow: $shadow-sm; }\r\n\r\n.admin-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 28px;\r\n\r\n  h1 { font-family: $font-heading; font-size: 1.5rem; font-weight: 800; color: $text-primary; }\r\n}\r\n\r\n.add-btn[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  padding: 10px 20px;\r\n  border-radius: $radius-md;\r\n  border: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-1px); }\r\n}\r\n\r\n\n\r\n.admin-stats[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 16px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.admin-stat[_ngcontent-%COMP%] {\r\n  background: $bg-secondary;\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n\r\n  .as-num {\r\n    font-family: $font-heading;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    color: $primary-color;\r\n  }\r\n\r\n  .as-lbl { font-size: 0.78rem; color: $text-muted; }\r\n}\r\n\r\n\n\r\n.admin-table-card[_ngcontent-%COMP%] {\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  overflow: hidden;\r\n}\r\n\r\n.table-search[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 14px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n  background: $bg-primary;\r\n\r\n  input {\r\n    flex: 1;\r\n    border: none;\r\n    background: transparent;\r\n    font-size: 0.9rem;\r\n    font-family: $font-body;\r\n    color: $text-primary;\r\n    &:focus { outline: none; }\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.pt-header[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 2fr 120px 160px 100px 80px;\r\n  gap: 16px;\r\n  padding: 12px 20px;\r\n  background: $bg-secondary;\r\n\r\n  span { font-size: 0.78rem; font-weight: 700; color: $text-muted; text-transform: uppercase; letter-spacing: 0.05em; }\r\n}\r\n\r\n.pt-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 2fr 120px 160px 100px 80px;\r\n  gap: 16px;\r\n  align-items: center;\r\n  padding: 16px 20px;\r\n  border-top: 1px solid $border-color;\r\n  transition: background $transition-fast;\r\n\r\n  &:hover { background: $bg-primary; }\r\n}\r\n\r\n.pt-product[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n\r\n  img { width: 48px; height: 38px; border-radius: $radius-sm; object-fit: cover; flex-shrink: 0; }\r\n\r\n  .pt-name { font-family: $font-heading; font-weight: 600; font-size: 0.88rem; color: $text-primary; }\r\n  .pt-brand { font-size: 0.78rem; color: $text-muted; }\r\n}\r\n\r\n.pt-cat[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  padding: 3px 10px;\r\n  border-radius: $radius-pill;\r\n}\r\n\r\n.pt-stock[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  .stock-bar {\r\n    flex: 1;\r\n    height: 6px;\r\n    background: $border-color;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .stock-fill {\r\n    height: 100%;\r\n    background: $primary-color;\r\n    border-radius: 6px;\r\n    transition: width 0.6s ease;\r\n  }\r\n\r\n  span { font-size: 0.78rem; color: $text-muted; white-space: nowrap; }\r\n}\r\n\r\n.pt-price[_ngcontent-%COMP%] { font-family: $font-heading; font-weight: 700; color: $primary-color; }\r\n\r\n.pt-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 6px;\r\n\r\n  button {\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    border-radius: $radius-sm;\r\n    background: $bg-primary;\r\n    cursor: pointer;\r\n    font-size: 0.85rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: background $transition-fast;\r\n\r\n    &:hover { background: $border-color; }\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .admin-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .admin-sidebar[_ngcontent-%COMP%] { position: static; }\r\n  .admin-stats[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n  .pt-header[_ngcontent-%COMP%], .pt-row[_ngcontent-%COMP%] { grid-template-columns: 1fr 100px 80px; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', template: `
    <div class="admin-page">
      <div class="container">
        <div class="admin-layout">
          <!-- Sidebar -->
          <aside class="admin-sidebar">
            <div class="admin-brand">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="3" fill="#6366F1"/><rect x="6" y="3" width="12" height="6" rx="2" fill="#A78BFA"/></svg>
              Admin Panel
            </div>
            <nav class="admin-nav">
              <a class="active">📦 Products</a>
              <a>📊 Analytics</a>
              <a>👥 Customers</a>
              <a>🛒 Orders</a>
              <a>⚙️ Settings</a>
            </nav>
          </aside>

          <!-- Main -->
          <main class="admin-main">
            <div class="admin-header">
              <h1>Product Management</h1>
              <button class="add-btn">+ Add New Product</button>
            </div>

            <!-- Stats Row -->
            <div class="admin-stats">
              <div class="admin-stat" *ngFor="let s of adminStats">
                <span class="as-num">{{ s.value }}</span>
                <span class="as-lbl">{{ s.label }}</span>
              </div>
            </div>

            <!-- Products Table -->
            <div class="admin-table-card">
              <div class="table-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input type="text" placeholder="Search products..." />
              </div>

              <div class="prod-table">
                <div class="pt-header">
                  <span>Product</span>
                  <span>Category</span>
                  <span>Stock</span>
                  <span>Price</span>
                  <span>Actions</span>
                </div>
                <div class="pt-row" *ngFor="let p of products">
                  <div class="pt-product">
                    <img [src]="p.image" [alt]="p.name" />
                    <div>
                      <p class="pt-name">{{ p.name }}</p>
                      <p class="pt-brand">{{ p.brand }}</p>
                    </div>
                  </div>
                  <span class="pt-cat">{{ p.category }}</span>
                  <div class="pt-stock">
                    <div class="stock-bar"><div class="stock-fill" [style.width]="getStock()+'%'"></div></div>
                    <span>{{ getStock() }}%</span>
                  </div>
                  <span class="pt-price">\${{ p.price.toFixed(2) }}</span>
                  <div class="pt-actions">
                    <button class="edit-btn">✏️</button>
                    <button class="del-btn">🗑️</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  `, styles: ["@import '../../../styles/variables';\r\n\r\n.admin-page { padding: 40px 0 80px; background: $bg-primary; min-height: 100vh; }\r\n\r\n.admin-layout {\r\n  display: grid;\r\n  grid-template-columns: 220px 1fr;\r\n  gap: 28px;\r\n  align-items: start;\r\n}\r\n\r\n/* Sidebar */\r\n.admin-sidebar {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 24px 16px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n}\r\n\r\n.admin-brand {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-family: $font-heading;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  padding: 0 8px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.admin-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n\r\n  a {\r\n    display: block;\r\n    padding: 10px 12px;\r\n    border-radius: $radius-md;\r\n    font-size: 0.88rem;\r\n    font-weight: 500;\r\n    color: $text-muted;\r\n    cursor: pointer;\r\n    transition: all $transition-base;\r\n\r\n    &:hover { background: $highlight; color: $primary-color; }\r\n    &.active { background: $highlight; color: $primary-color; font-weight: 600; }\r\n  }\r\n}\r\n\r\n/* Main */\r\n.admin-main { background: $surface; border: 1px solid $border-color; border-radius: $radius-lg; padding: 32px; box-shadow: $shadow-sm; }\r\n\r\n.admin-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 28px;\r\n\r\n  h1 { font-family: $font-heading; font-size: 1.5rem; font-weight: 800; color: $text-primary; }\r\n}\r\n\r\n.add-btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  padding: 10px 20px;\r\n  border-radius: $radius-md;\r\n  border: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-1px); }\r\n}\r\n\r\n/* Admin Stats */\r\n.admin-stats {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 16px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.admin-stat {\r\n  background: $bg-secondary;\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n\r\n  .as-num {\r\n    font-family: $font-heading;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    color: $primary-color;\r\n  }\r\n\r\n  .as-lbl { font-size: 0.78rem; color: $text-muted; }\r\n}\r\n\r\n/* Table */\r\n.admin-table-card {\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  overflow: hidden;\r\n}\r\n\r\n.table-search {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 14px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n  background: $bg-primary;\r\n\r\n  input {\r\n    flex: 1;\r\n    border: none;\r\n    background: transparent;\r\n    font-size: 0.9rem;\r\n    font-family: $font-body;\r\n    color: $text-primary;\r\n    &:focus { outline: none; }\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.pt-header {\r\n  display: grid;\r\n  grid-template-columns: 2fr 120px 160px 100px 80px;\r\n  gap: 16px;\r\n  padding: 12px 20px;\r\n  background: $bg-secondary;\r\n\r\n  span { font-size: 0.78rem; font-weight: 700; color: $text-muted; text-transform: uppercase; letter-spacing: 0.05em; }\r\n}\r\n\r\n.pt-row {\r\n  display: grid;\r\n  grid-template-columns: 2fr 120px 160px 100px 80px;\r\n  gap: 16px;\r\n  align-items: center;\r\n  padding: 16px 20px;\r\n  border-top: 1px solid $border-color;\r\n  transition: background $transition-fast;\r\n\r\n  &:hover { background: $bg-primary; }\r\n}\r\n\r\n.pt-product {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n\r\n  img { width: 48px; height: 38px; border-radius: $radius-sm; object-fit: cover; flex-shrink: 0; }\r\n\r\n  .pt-name { font-family: $font-heading; font-weight: 600; font-size: 0.88rem; color: $text-primary; }\r\n  .pt-brand { font-size: 0.78rem; color: $text-muted; }\r\n}\r\n\r\n.pt-cat {\r\n  display: inline-flex;\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  padding: 3px 10px;\r\n  border-radius: $radius-pill;\r\n}\r\n\r\n.pt-stock {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  .stock-bar {\r\n    flex: 1;\r\n    height: 6px;\r\n    background: $border-color;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .stock-fill {\r\n    height: 100%;\r\n    background: $primary-color;\r\n    border-radius: 6px;\r\n    transition: width 0.6s ease;\r\n  }\r\n\r\n  span { font-size: 0.78rem; color: $text-muted; white-space: nowrap; }\r\n}\r\n\r\n.pt-price { font-family: $font-heading; font-weight: 700; color: $primary-color; }\r\n\r\n.pt-actions {\r\n  display: flex;\r\n  gap: 6px;\r\n\r\n  button {\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    border-radius: $radius-sm;\r\n    background: $bg-primary;\r\n    cursor: pointer;\r\n    font-size: 0.85rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: background $transition-fast;\r\n\r\n    &:hover { background: $border-color; }\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .admin-layout { grid-template-columns: 1fr; }\r\n  .admin-sidebar { position: static; }\r\n  .admin-stats { grid-template-columns: repeat(2, 1fr); }\r\n  .pt-header, .pt-row { grid-template-columns: 1fr 100px 80px; }\r\n}\r\n"] }]
    }], () => [{ type: i1.ProductService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\features\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 83 }); })();
//# sourceMappingURL=admin-dashboard.component.js.map