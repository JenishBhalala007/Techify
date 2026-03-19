import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function UserDashboardComponent_div_34_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "span", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 27);
    i0.ɵɵelement(6, "img", 28);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 29);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 30);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r1.date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", order_r1.image, i0.ɵɵsanitizeUrl)("alt", order_r1.product);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r1.product);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", order_r1.amount, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(order_r1.statusClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(order_r1.status);
} }
function UserDashboardComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h2", 20);
    i0.ɵɵtext(2, "Order History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 21)(4, "div", 22)(5, "span");
    i0.ɵɵtext(6, "Order ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, UserDashboardComponent_div_34_div_15_Template, 13, 9, "div", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngForOf", ctx_r1.orders);
} }
function UserDashboardComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h2", 20);
    i0.ɵɵtext(2, "Profile Settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "label");
    i0.ɵɵtext(7, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 33)(10, "label");
    i0.ɵɵtext(11, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 33)(14, "label");
    i0.ɵɵtext(15, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 33)(18, "label");
    i0.ɵɵtext(19, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 38);
    i0.ɵɵtext(22, "Save Changes");
    i0.ɵɵelementEnd()()();
} }
export class UserDashboardComponent {
    constructor() {
        this.activeSection = 'orders';
        this.orders = [
            { id: '#TFY-28419', date: 'Mar 1, 2025', product: 'Apex Pro TKL', image: 'assets/keyboard1.png', amount: '219.99', status: 'Delivered', statusClass: 'status-delivered' },
            { id: '#TFY-28210', date: 'Feb 18, 2025', product: 'Viper V3 Pro', image: 'assets/mouse1.png', amount: '159.99', status: 'Processing', statusClass: 'status-processing' },
            { id: '#TFY-27891', date: 'Jan 29, 2025', product: 'CloudX Flight Pro', image: 'assets/headset1.png', amount: '129.99', status: 'Delivered', statusClass: 'status-delivered' },
            { id: '#TFY-27400', date: 'Jan 12, 2025', product: 'Pearl Luxe Full-Size', image: 'assets/keyboard3.png', amount: '289.99', status: 'Shipped', statusClass: 'status-shipped' }
        ];
    }
    static { this.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], decls: 36, vars: 8, consts: [[1, "dashboard-page"], [1, "container"], [1, "dashboard-layout"], [1, "dash-sidebar"], [1, "user-info"], [1, "user-avatar"], [1, "dash-nav"], [3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["d", "M3 9h18M9 21V9"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["cx", "12", "cy", "12", "r", "3"], ["routerLink", "/auth", 1, "logout-link"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "dash-main"], [4, "ngIf"], [1, "section-heading"], [1, "orders-table"], [1, "table-header"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "order-id"], [1, "order-date"], [1, "order-product"], [3, "src", "alt"], [1, "order-amount"], [1, "order-status"], [1, "profile-form"], [1, "form-row"], [1, "form-field"], ["type", "text", "value", "John"], ["type", "text", "value", "Doe"], ["type", "email", "value", "john@techify.com"], ["type", "text", "placeholder", "+1 (555) 000-0000"], [1, "save-btn"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵtext(6, "JD");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div")(8, "h3");
            i0.ɵɵtext(9, "John Doe");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "john@techify.com");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "nav", 6)(13, "a", 7);
            i0.ɵɵlistener("click", function UserDashboardComponent_Template_a_click_13_listener() { return ctx.activeSection = "orders"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(14, "svg", 8);
            i0.ɵɵelement(15, "rect", 9)(16, "path", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " Order History ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "a", 7);
            i0.ɵɵlistener("click", function UserDashboardComponent_Template_a_click_18_listener() { return ctx.activeSection = "profile"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(19, "svg", 8);
            i0.ɵɵelement(20, "path", 11)(21, "circle", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(22, " Profile ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(23, "a", 7);
            i0.ɵɵlistener("click", function UserDashboardComponent_Template_a_click_23_listener() { return ctx.activeSection = "settings"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(24, "svg", 8);
            i0.ɵɵelement(25, "circle", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Settings ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(27, "a", 14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(28, "svg", 8);
            i0.ɵɵelement(29, "path", 15)(30, "polyline", 16)(31, "line", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32, " Sign Out ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(33, "main", 18);
            i0.ɵɵtemplate(34, UserDashboardComponent_div_34_Template, 16, 1, "div", 19)(35, UserDashboardComponent_div_35_Template, 23, 0, "div", 19);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵclassProp("active", ctx.activeSection === "orders");
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("active", ctx.activeSection === "profile");
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("active", ctx.activeSection === "settings");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.activeSection === "orders");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeSection === "profile");
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.RouterLink], styles: ["@import '../../../styles/variables';\r\n\r\n.dashboard-page[_ngcontent-%COMP%] { padding: 40px 0 80px; background: $bg-primary; min-height: 100vh; }\r\n\r\n.dashboard-layout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 260px 1fr;\r\n  gap: 28px;\r\n  align-items: start;\r\n}\r\n\r\n\n\r\n.dash-sidebar[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 24px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n  padding-bottom: 20px;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  h3 { font-family: $font-heading; font-size: 1rem; font-weight: 700; color: $text-primary; }\r\n  p { font-size: 0.8rem; color: $text-muted; }\r\n}\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.dash-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n\r\n  a {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px 14px;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    color: $text-muted;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: all $transition-base;\r\n\r\n    &:hover { background: $highlight; color: $primary-color; }\r\n    &.active { background: $highlight; color: $primary-color; font-weight: 600; }\r\n  }\r\n\r\n  .logout-link { margin-top: 12px; color: #EF4444; &:hover { background: #FEF2F2; color: #DC2626; } }\r\n}\r\n\r\n\n\r\n.dash-main[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 32px;\r\n  box-shadow: $shadow-sm;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n\n\r\n.orders-table[_ngcontent-%COMP%] { overflow: hidden; }\r\n\r\n.table-header[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 120px 100px 1fr 100px 110px;\r\n  gap: 16px;\r\n  padding: 12px 16px;\r\n  background: $bg-secondary;\r\n  border-radius: $radius-md;\r\n  margin-bottom: 4px;\r\n\r\n  span { font-size: 0.78rem; font-weight: 700; color: $text-muted; text-transform: uppercase; letter-spacing: 0.05em; }\r\n}\r\n\r\n.table-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 120px 100px 1fr 100px 110px;\r\n  gap: 16px;\r\n  align-items: center;\r\n  padding: 16px;\r\n  border-bottom: 1px solid $border-color;\r\n  transition: background $transition-fast;\r\n\r\n  &:hover { background: $bg-primary; }\r\n  &:last-child { border-bottom: none; }\r\n}\r\n\r\n.order-id[_ngcontent-%COMP%] { font-family: $font-heading; font-size: 0.82rem; font-weight: 700; color: $primary-color; }\r\n.order-date[_ngcontent-%COMP%] { font-size: 0.82rem; color: $text-muted; }\r\n\r\n.order-product[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  img { width: 38px; height: 32px; border-radius: $radius-sm; object-fit: cover; }\r\n  span { font-size: 0.88rem; color: $text-primary; font-weight: 500; }\r\n}\r\n\r\n.order-amount[_ngcontent-%COMP%] { font-family: $font-heading; font-weight: 700; color: $text-primary; font-size: 0.9rem; }\r\n\r\n.order-status[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 4px 12px;\r\n  border-radius: $radius-pill;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  font-family: $font-heading;\r\n}\r\n\r\n.status-delivered[_ngcontent-%COMP%] { background: #DCFCE7; color: #16A34A; }\r\n.status-processing[_ngcontent-%COMP%] { background: #FEF3C7; color: #D97706; }\r\n.status-shipped[_ngcontent-%COMP%] { background: $highlight; color: $primary-color; }\r\n\r\n\n\r\n.profile-form[_ngcontent-%COMP%] { max-width: 500px; }\r\n\r\n.form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin-bottom: 16px;\r\n\r\n  label { font-size: 0.82rem; font-weight: 600; font-family: $font-heading; color: $text-primary; }\r\n\r\n  input {\r\n    padding: 11px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    font-family: $font-body;\r\n    color: $text-primary;\r\n    background: $bg-primary;\r\n    transition: border-color $transition-base;\r\n\r\n    &:focus { border-color: $primary-color; outline: none; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.save-btn[_ngcontent-%COMP%] {\r\n  padding: 12px 28px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-1px); }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .dashboard-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .dash-sidebar[_ngcontent-%COMP%] { position: static; }\r\n  .table-header[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%] { grid-template-columns: 1fr 80px; }\r\n  .order-date[_ngcontent-%COMP%], .order-product[_ngcontent-%COMP%], .order-amount[_ngcontent-%COMP%] { display: none; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-user-dashboard', template: "<div class=\"dashboard-page\">\r\n  <div class=\"container\">\r\n    <div class=\"dashboard-layout\">\r\n      <!-- Sidebar -->\r\n      <aside class=\"dash-sidebar\">\r\n        <div class=\"user-info\">\r\n          <div class=\"user-avatar\">JD</div>\r\n          <div>\r\n            <h3>John Doe</h3>\r\n            <p>john&#64;techify.com</p>\r\n          </div>\r\n        </div>\r\n        <nav class=\"dash-nav\">\r\n          <a [class.active]=\"activeSection==='orders'\" (click)=\"activeSection='orders'\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18M9 21V9\"/></svg>\r\n            Order History\r\n          </a>\r\n          <a [class.active]=\"activeSection==='profile'\" (click)=\"activeSection='profile'\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/></svg>\r\n            Profile\r\n          </a>\r\n          <a [class.active]=\"activeSection==='settings'\" (click)=\"activeSection='settings'\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>\r\n            Settings\r\n          </a>\r\n          <a routerLink=\"/auth\" class=\"logout-link\">\r\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><polyline points=\"16 17 21 12 16 7\"/><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/></svg>\r\n            Sign Out\r\n          </a>\r\n        </nav>\r\n      </aside>\r\n\r\n      <!-- Main -->\r\n      <main class=\"dash-main\">\r\n        <div *ngIf=\"activeSection === 'orders'\">\r\n          <h2 class=\"section-heading\">Order History</h2>\r\n          <div class=\"orders-table\">\r\n            <div class=\"table-header\">\r\n              <span>Order ID</span>\r\n              <span>Date</span>\r\n              <span>Product</span>\r\n              <span>Amount</span>\r\n              <span>Status</span>\r\n            </div>\r\n            <div class=\"table-row\" *ngFor=\"let order of orders\">\r\n              <span class=\"order-id\">{{ order.id }}</span>\r\n              <span class=\"order-date\">{{ order.date }}</span>\r\n              <div class=\"order-product\">\r\n                <img [src]=\"order.image\" [alt]=\"order.product\" />\r\n                <span>{{ order.product }}</span>\r\n              </div>\r\n              <span class=\"order-amount\">${{ order.amount }}</span>\r\n              <span class=\"order-status\" [class]=\"order.statusClass\">{{ order.status }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"activeSection === 'profile'\">\r\n          <h2 class=\"section-heading\">Profile Settings</h2>\r\n          <div class=\"profile-form\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-field\"><label>First Name</label><input type=\"text\" value=\"John\" /></div>\r\n              <div class=\"form-field\"><label>Last Name</label><input type=\"text\" value=\"Doe\" /></div>\r\n            </div>\r\n            <div class=\"form-field\"><label>Email</label><input type=\"email\" value=\"john@techify.com\" /></div>\r\n            <div class=\"form-field\"><label>Phone</label><input type=\"text\" placeholder=\"+1 (555) 000-0000\" /></div>\r\n            <button class=\"save-btn\">Save Changes</button>\r\n          </div>\r\n        </div>\r\n      </main>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["@import '../../../styles/variables';\r\n\r\n.dashboard-page { padding: 40px 0 80px; background: $bg-primary; min-height: 100vh; }\r\n\r\n.dashboard-layout {\r\n  display: grid;\r\n  grid-template-columns: 260px 1fr;\r\n  gap: 28px;\r\n  align-items: start;\r\n}\r\n\r\n/* Sidebar */\r\n.dash-sidebar {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 24px;\r\n  box-shadow: $shadow-sm;\r\n  position: sticky;\r\n  top: 90px;\r\n}\r\n\r\n.user-info {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n  padding-bottom: 20px;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  h3 { font-family: $font-heading; font-size: 1rem; font-weight: 700; color: $text-primary; }\r\n  p { font-size: 0.8rem; color: $text-muted; }\r\n}\r\n\r\n.user-avatar {\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.dash-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n\r\n  a {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px 14px;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    color: $text-muted;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: all $transition-base;\r\n\r\n    &:hover { background: $highlight; color: $primary-color; }\r\n    &.active { background: $highlight; color: $primary-color; font-weight: 600; }\r\n  }\r\n\r\n  .logout-link { margin-top: 12px; color: #EF4444; &:hover { background: #FEF2F2; color: #DC2626; } }\r\n}\r\n\r\n/* Main */\r\n.dash-main {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 32px;\r\n  box-shadow: $shadow-sm;\r\n}\r\n\r\n.section-heading {\r\n  font-family: $font-heading;\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n/* Orders Table */\r\n.orders-table { overflow: hidden; }\r\n\r\n.table-header {\r\n  display: grid;\r\n  grid-template-columns: 120px 100px 1fr 100px 110px;\r\n  gap: 16px;\r\n  padding: 12px 16px;\r\n  background: $bg-secondary;\r\n  border-radius: $radius-md;\r\n  margin-bottom: 4px;\r\n\r\n  span { font-size: 0.78rem; font-weight: 700; color: $text-muted; text-transform: uppercase; letter-spacing: 0.05em; }\r\n}\r\n\r\n.table-row {\r\n  display: grid;\r\n  grid-template-columns: 120px 100px 1fr 100px 110px;\r\n  gap: 16px;\r\n  align-items: center;\r\n  padding: 16px;\r\n  border-bottom: 1px solid $border-color;\r\n  transition: background $transition-fast;\r\n\r\n  &:hover { background: $bg-primary; }\r\n  &:last-child { border-bottom: none; }\r\n}\r\n\r\n.order-id { font-family: $font-heading; font-size: 0.82rem; font-weight: 700; color: $primary-color; }\r\n.order-date { font-size: 0.82rem; color: $text-muted; }\r\n\r\n.order-product {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  img { width: 38px; height: 32px; border-radius: $radius-sm; object-fit: cover; }\r\n  span { font-size: 0.88rem; color: $text-primary; font-weight: 500; }\r\n}\r\n\r\n.order-amount { font-family: $font-heading; font-weight: 700; color: $text-primary; font-size: 0.9rem; }\r\n\r\n.order-status {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 4px 12px;\r\n  border-radius: $radius-pill;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  font-family: $font-heading;\r\n}\r\n\r\n.status-delivered { background: #DCFCE7; color: #16A34A; }\r\n.status-processing { background: #FEF3C7; color: #D97706; }\r\n.status-shipped { background: $highlight; color: $primary-color; }\r\n\r\n/* Profile Form */\r\n.profile-form { max-width: 500px; }\r\n\r\n.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\r\n\r\n.form-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin-bottom: 16px;\r\n\r\n  label { font-size: 0.82rem; font-weight: 600; font-family: $font-heading; color: $text-primary; }\r\n\r\n  input {\r\n    padding: 11px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    font-family: $font-body;\r\n    color: $text-primary;\r\n    background: $bg-primary;\r\n    transition: border-color $transition-base;\r\n\r\n    &:focus { border-color: $primary-color; outline: none; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.save-btn {\r\n  padding: 12px 28px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-1px); }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .dashboard-layout { grid-template-columns: 1fr; }\r\n  .dash-sidebar { position: static; }\r\n  .table-header, .table-row { grid-template-columns: 1fr 80px; }\r\n  .order-date, .order-product, .order-amount { display: none; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserDashboardComponent, { className: "UserDashboardComponent", filePath: "src\\app\\features\\user-dashboard\\user-dashboard.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=user-dashboard.component.js.map