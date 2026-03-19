import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/cart.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
const _c0 = () => ({ exact: true });
function NavbarComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cartCount);
} }
export class NavbarComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
        this.searchOpen = false;
        this.mobileOpen = false;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(() => {
            this.cartCount = this.cartService.count;
        });
    }
    toggleSearch() {
        this.searchOpen = !this.searchOpen;
    }
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(i0.ɵɵdirectiveInject(i1.CartService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 49, vars: 5, consts: [[1, "navbar"], [1, "nav-inner"], ["routerLink", "/", 1, "nav-logo"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "3", "fill", "#6366F1"], ["x", "6", "y", "3", "width", "12", "height", "6", "rx", "2", "fill", "#A78BFA"], ["cx", "9", "cy", "11", "r", "1.5", "fill", "white"], ["cx", "12", "cy", "11", "r", "1.5", "fill", "white"], ["cx", "15", "cy", "11", "r", "1.5", "fill", "white"], [1, "logo-text"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/products", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "nav-actions"], ["title", "Search", 1, "icon-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["title", "Account", "routerLink", "/dashboard", 1, "icon-btn"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["title", "Cart", "routerLink", "/cart", 1, "icon-btn", "cart-btn"], ["d", "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 0 1-8 0"], ["class", "cart-badge", 4, "ngIf"], ["routerLink", "/auth", 1, "btn-login"], [1, "mobile-toggle", 3, "click"], [1, "search-bar"], [1, "search-inner", "container"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#6B7280", "stroke-width", "2"], ["type", "text", "placeholder", "Search keyboards, mice, headsets...", "autofocus", ""], [1, "search-close", 3, "click"], [1, "cart-badge"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "rect", 4)(5, "rect", 5)(6, "circle", 6)(7, "circle", 7)(8, "circle", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "span", 9);
            i0.ɵɵtext(10, "Techify");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "nav", 10)(12, "a", 11);
            i0.ɵɵtext(13, "Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 12);
            i0.ɵɵtext(15, "Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "a", 13);
            i0.ɵɵtext(17, "About");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a", 14);
            i0.ɵɵtext(19, "Contact");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 15)(21, "button", 16);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_21_listener() { return ctx.toggleSearch(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(22, "svg", 17);
            i0.ɵɵelement(23, "circle", 18)(24, "path", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(25, "button", 20);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(26, "svg", 17);
            i0.ɵɵelement(27, "path", 21)(28, "circle", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(29, "button", 23);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(30, "svg", 17);
            i0.ɵɵelement(31, "path", 24)(32, "line", 25)(33, "path", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(34, NavbarComponent_span_34_Template, 2, 1, "span", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(35, "a", 28);
            i0.ɵɵtext(36, "Sign In");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "button", 29);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_37_listener() { return ctx.mobileOpen = !ctx.mobileOpen; });
            i0.ɵɵelement(38, "span")(39, "span")(40, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "div", 30)(42, "div", 31);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(43, "svg", 32);
            i0.ɵɵelement(44, "circle", 18)(45, "path", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(46, "input", 33);
            i0.ɵɵelementStart(47, "button", 34);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_47_listener() { return ctx.toggleSearch(); });
            i0.ɵɵtext(48, "\u2715");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(4, _c0));
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("ngIf", ctx.cartCount > 0);
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("open", ctx.searchOpen);
        } }, dependencies: [i2.NgIf, i3.RouterLink, i3.RouterLinkActive], styles: ["@import '../../../../styles/variables';\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1000;\r\n  background: rgba(255, 255, 255, 0.80);\r\n  backdrop-filter: blur(20px);\r\n  -webkit-backdrop-filter: blur(20px);\r\n  border-bottom: 1px solid $border-color;\r\n  transition: all $transition-base;\r\n}\r\n\r\n.nav-inner[_ngcontent-%COMP%] {\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  padding: 0 40px;\r\n  height: 72px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\n\n\r\n.nav-logo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  text-decoration: none;\r\n  flex-shrink: 0;\r\n\r\n  .logo-text {\r\n    font-family: $font-heading;\r\n    font-size: 1.4rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n  }\r\n}\r\n\r\n\n\r\n.nav-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  flex: 1;\r\n\r\n  a {\r\n    font-family: $font-body;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    color: $text-muted;\r\n    padding: 6px 14px;\r\n    border-radius: $radius-pill;\r\n    text-decoration: none;\r\n    transition: all $transition-base;\r\n    position: relative;\r\n\r\n    &:hover {\r\n      color: $text-primary;\r\n      background: $highlight;\r\n    }\r\n\r\n    &.active {\r\n      color: $primary-color;\r\n      font-weight: 600;\r\n      background: $highlight;\r\n    }\r\n  }\r\n}\r\n\r\n\n\r\n.nav-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.icon-btn[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: $radius-md;\r\n  background: transparent;\r\n  color: $text-muted;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: $highlight;\r\n    color: $primary-color;\r\n  }\r\n}\r\n\r\n.cart-badge[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 4px;\r\n  width: 18px;\r\n  height: 18px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-size: 0.65rem;\r\n  font-weight: 700;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 2px solid white;\r\n  animation: _ngcontent-%COMP%_pop 0.2s ease;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_pop {\r\n  0% { transform: scale(0); }\r\n  70% { transform: scale(1.2); }\r\n  100% { transform: scale(1); }\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.85rem;\r\n  padding: 8px 20px;\r\n  border-radius: $radius-pill;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: #4F46E5;\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\r\n  }\r\n}\r\n\r\n\n\r\n.search-bar[_ngcontent-%COMP%] {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.3s ease, border-color 0.3s ease;\r\n  border-top: 0px solid transparent;\r\n\r\n  &.open {\r\n    max-height: 64px;\r\n    border-top: 1px solid $border-color;\r\n  }\r\n}\r\n\r\n.search-inner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n\r\n  input {\r\n    flex: 1;\r\n    border: none;\r\n    background: transparent;\r\n    font-family: $font-body;\r\n    font-size: 1rem;\r\n    color: $text-primary;\r\n\r\n    &::placeholder { color: $text-muted; }\r\n    &:focus { outline: none; }\r\n  }\r\n}\r\n\r\n.search-close[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: $text-muted;\r\n  font-size: 1rem;\r\n  padding: 4px 8px;\r\n  border-radius: $radius-sm;\r\n  transition: all $transition-fast;\r\n\r\n  &:hover { background: $highlight; color: $primary-color; }\r\n}\r\n\r\n\n\r\n.mobile-toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  margin-left: auto;\r\n\r\n  span {\r\n    display: block;\r\n    width: 22px;\r\n    height: 2px;\r\n    background: $text-primary;\r\n    border-radius: 2px;\r\n    transition: all $transition-base;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .nav-links[_ngcontent-%COMP%] { display: none; }\r\n  .btn-login[_ngcontent-%COMP%] { display: none; }\r\n  .mobile-toggle[_ngcontent-%COMP%] { display: flex; }\r\n  .nav-inner[_ngcontent-%COMP%] { padding: 0 20px; gap: 16px; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', template: `
    <header class="navbar">
      <div class="nav-inner">
        <!-- Logo -->
        <a routerLink="/" class="nav-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="20" height="14" rx="3" fill="#6366F1"/>
            <rect x="6" y="3" width="12" height="6" rx="2" fill="#A78BFA"/>
            <circle cx="9" cy="11" r="1.5" fill="white"/>
            <circle cx="12" cy="11" r="1.5" fill="white"/>
            <circle cx="15" cy="11" r="1.5" fill="white"/>
          </svg>
          <span class="logo-text">Techify</span>
        </a>

        <!-- Nav Links -->
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
          <a routerLink="/products" routerLinkActive="active">Products</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>

        <!-- Nav Actions -->
        <div class="nav-actions">
          <!-- Search -->
          <button class="icon-btn" title="Search" (click)="toggleSearch()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          <!-- User -->
          <button class="icon-btn" title="Account" routerLink="/dashboard">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          <!-- Cart -->
          <button class="icon-btn cart-btn" title="Cart" routerLink="/cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="cart-badge" *ngIf="cartCount > 0">{{ cartCount }}</span>
          </button>

          <!-- Auth -->
          <a routerLink="/auth" class="btn-login">Sign In</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" (click)="mobileOpen = !mobileOpen">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Search Bar (expandable) -->
      <div class="search-bar" [class.open]="searchOpen">
        <div class="search-inner container">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Search keyboards, mice, headsets..." autofocus />
          <button class="search-close" (click)="toggleSearch()">✕</button>
        </div>
      </div>
    </header>
  `, styles: ["@import '../../../../styles/variables';\r\n\r\n.navbar {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1000;\r\n  background: rgba(255, 255, 255, 0.80);\r\n  backdrop-filter: blur(20px);\r\n  -webkit-backdrop-filter: blur(20px);\r\n  border-bottom: 1px solid $border-color;\r\n  transition: all $transition-base;\r\n}\r\n\r\n.nav-inner {\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  padding: 0 40px;\r\n  height: 72px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\n/* Logo */\r\n.nav-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  text-decoration: none;\r\n  flex-shrink: 0;\r\n\r\n  .logo-text {\r\n    font-family: $font-heading;\r\n    font-size: 1.4rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n  }\r\n}\r\n\r\n/* Nav Links */\r\n.nav-links {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  flex: 1;\r\n\r\n  a {\r\n    font-family: $font-body;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    color: $text-muted;\r\n    padding: 6px 14px;\r\n    border-radius: $radius-pill;\r\n    text-decoration: none;\r\n    transition: all $transition-base;\r\n    position: relative;\r\n\r\n    &:hover {\r\n      color: $text-primary;\r\n      background: $highlight;\r\n    }\r\n\r\n    &.active {\r\n      color: $primary-color;\r\n      font-weight: 600;\r\n      background: $highlight;\r\n    }\r\n  }\r\n}\r\n\r\n/* Nav Actions */\r\n.nav-actions {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.icon-btn {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: $radius-md;\r\n  background: transparent;\r\n  color: $text-muted;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: $highlight;\r\n    color: $primary-color;\r\n  }\r\n}\r\n\r\n.cart-badge {\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 4px;\r\n  width: 18px;\r\n  height: 18px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-size: 0.65rem;\r\n  font-weight: 700;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 2px solid white;\r\n  animation: pop 0.2s ease;\r\n}\r\n\r\n@keyframes pop {\r\n  0% { transform: scale(0); }\r\n  70% { transform: scale(1.2); }\r\n  100% { transform: scale(1); }\r\n}\r\n\r\n.btn-login {\r\n  margin-left: 8px;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.85rem;\r\n  padding: 8px 20px;\r\n  border-radius: $radius-pill;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    background: #4F46E5;\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\r\n  }\r\n}\r\n\r\n/* Search Bar */\r\n.search-bar {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.3s ease, border-color 0.3s ease;\r\n  border-top: 0px solid transparent;\r\n\r\n  &.open {\r\n    max-height: 64px;\r\n    border-top: 1px solid $border-color;\r\n  }\r\n}\r\n\r\n.search-inner {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n\r\n  input {\r\n    flex: 1;\r\n    border: none;\r\n    background: transparent;\r\n    font-family: $font-body;\r\n    font-size: 1rem;\r\n    color: $text-primary;\r\n\r\n    &::placeholder { color: $text-muted; }\r\n    &:focus { outline: none; }\r\n  }\r\n}\r\n\r\n.search-close {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: $text-muted;\r\n  font-size: 1rem;\r\n  padding: 4px 8px;\r\n  border-radius: $radius-sm;\r\n  transition: all $transition-fast;\r\n\r\n  &:hover { background: $highlight; color: $primary-color; }\r\n}\r\n\r\n/* Mobile Toggle */\r\n.mobile-toggle {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  margin-left: auto;\r\n\r\n  span {\r\n    display: block;\r\n    width: 22px;\r\n    height: 2px;\r\n    background: $text-primary;\r\n    border-radius: 2px;\r\n    transition: all $transition-base;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .nav-links { display: none; }\r\n  .btn-login { display: none; }\r\n  .mobile-toggle { display: flex; }\r\n  .nav-inner { padding: 0 20px; gap: 16px; }\r\n}\r\n"] }]
    }], () => [{ type: i1.CartService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\shared\\components\\navbar\\navbar.component.ts", lineNumber: 79 }); })();
//# sourceMappingURL=navbar.component.js.map