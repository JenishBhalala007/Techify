import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AuthComponent_form_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 13)(1, "h2");
    i0.ɵɵtext(2, "Welcome back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 14);
    i0.ɵɵtext(4, "Sign in to your Techify account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15)(6, "label");
    i0.ɵɵtext(7, "Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 15)(10, "label");
    i0.ɵɵtext(11, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 17);
    i0.ɵɵelementStart(13, "a", 18);
    i0.ɵɵtext(14, "Forgot password?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 19);
    i0.ɵɵtext(16, "Log In");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 20)(18, "span");
    i0.ɵɵtext(19, "or continue with");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "button", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(21, "svg", 22);
    i0.ɵɵelement(22, "path", 23)(23, "path", 24)(24, "path", 25)(25, "path", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, " Continue with Google ");
    i0.ɵɵelementEnd()();
} }
function AuthComponent_form_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 13)(1, "h2");
    i0.ɵɵtext(2, "Join Techify");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 14);
    i0.ɵɵtext(4, "Create your account and start shopping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 27)(6, "div", 15)(7, "label");
    i0.ɵɵtext(8, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 15)(11, "label");
    i0.ɵɵtext(12, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "input", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 15)(15, "label");
    i0.ɵɵtext(16, "Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 15)(19, "label");
    i0.ɵɵtext(20, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 19);
    i0.ɵɵtext(23, "Create Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 20)(25, "span");
    i0.ɵɵtext(26, "or continue with");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(28, "svg", 22);
    i0.ɵɵelement(29, "path", 23)(30, "path", 24)(31, "path", 25)(32, "path", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33, " Continue with Google ");
    i0.ɵɵelementEnd()();
} }
export class AuthComponent {
    constructor() {
        this.activeTab = 'login';
    }
    static { this.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthComponent, selectors: [["app-auth"]], decls: 23, vars: 6, consts: [[1, "auth-page"], [1, "auth-left"], [1, "auth-left-content"], [1, "brand-logo"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "3", "fill", "white", "fill-opacity", "0.9"], ["x", "6", "y", "3", "width", "12", "height", "6", "rx", "2", "fill", "white", "fill-opacity", "0.6"], ["src", "assets/keyboard_hero.png", "alt", "Premium Keyboard", 1, "auth-product-img"], [1, "auth-right"], [1, "auth-form-card"], [1, "auth-tabs"], [3, "click"], ["class", "auth-form", 4, "ngIf"], [1, "auth-form"], [1, "form-subtitle"], [1, "form-field"], ["type", "email", "placeholder", "you@email.com"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["href", "#", 1, "forgot-link"], ["type", "submit", 1, "auth-btn"], [1, "auth-divider"], ["type", "button", 1, "google-btn"], ["width", "18", "height", "18", "viewBox", "0 0 24 24"], ["d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "fill", "#4285F4"], ["d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "fill", "#34A853"], ["d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "fill", "#FBBC05"], ["d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "fill", "#EA4335"], [1, "form-row"], ["type", "text", "placeholder", "John"], ["type", "text", "placeholder", "Doe"], ["type", "password", "placeholder", "Create a strong password"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "rect", 5)(6, "rect", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Techify");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "h2");
            i0.ɵɵtext(10, "\"The best keyboard I've ever typed on.\"");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "\u2014 Alex M., Verified Customer \u2B50\u2B50\u2B50\u2B50\u2B50");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(13, "img", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "button", 11);
            i0.ɵɵlistener("click", function AuthComponent_Template_button_click_17_listener() { return ctx.activeTab = "login"; });
            i0.ɵɵtext(18, "Log In");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 11);
            i0.ɵɵlistener("click", function AuthComponent_Template_button_click_19_listener() { return ctx.activeTab = "register"; });
            i0.ɵɵtext(20, "Create Account");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(21, AuthComponent_form_21_Template, 27, 0, "form", 12)(22, AuthComponent_form_22_Template, 34, 0, "form", 12);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(17);
            i0.ɵɵclassProp("active", ctx.activeTab === "login");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.activeTab === "register");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.activeTab === "login");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeTab === "register");
        } }, dependencies: [i1.NgIf], styles: ["@import '../../../styles/variables';\r\n\r\n.auth-page[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n\n\r\n.auth-left[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #6366F1 0%, #7C3AED 100%);\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 48px;\r\n}\r\n\r\n.auth-left-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.brand-logo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-bottom: 40px;\r\n\r\n  span {\r\n    font-family: $font-heading;\r\n    font-size: 1.4rem;\r\n    font-weight: 800;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.auth-left-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: white;\r\n  line-height: 1.35;\r\n  margin-bottom: 12px;\r\n  font-style: italic;\r\n}\r\n\r\n.auth-left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: rgba(255,255,255,0.75);\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.auth-product-img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: $radius-lg;\r\n  box-shadow: 0 20px 60px rgba(0,0,0,0.30);\r\n  transform: rotate(-3deg) scale(1.05);\r\n  transition: transform $transition-base;\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n  &:hover { transform: rotate(-1deg) scale(1.06); }\r\n}\r\n\r\n\n\r\n.auth-right[_ngcontent-%COMP%] {\r\n  background: $bg-primary;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 40px;\r\n}\r\n\r\n.auth-form-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 440px;\r\n}\r\n\r\n.auth-tabs[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background: $bg-secondary;\r\n  border-radius: $radius-pill;\r\n  padding: 4px;\r\n  margin-bottom: 36px;\r\n\r\n  button {\r\n    flex: 1;\r\n    padding: 10px;\r\n    border-radius: $radius-pill;\r\n    border: none;\r\n    background: transparent;\r\n    font-family: $font-heading;\r\n    font-size: 0.9rem;\r\n    font-weight: 600;\r\n    color: $text-muted;\r\n    cursor: pointer;\r\n    transition: all $transition-base;\r\n\r\n    &.active {\r\n      background: $surface;\r\n      color: $primary-color;\r\n      box-shadow: $shadow-sm;\r\n    }\r\n  }\r\n}\r\n\r\n.auth-form[_ngcontent-%COMP%] {\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.6rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n    margin-bottom: 6px;\r\n  }\r\n}\r\n\r\n.form-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 12px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin-bottom: 16px;\r\n  position: relative;\r\n\r\n  label {\r\n    font-size: 0.82rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-family: $font-heading;\r\n  }\r\n\r\n  input {\r\n    padding: 12px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    color: $text-primary;\r\n    background: $surface;\r\n    transition: border-color $transition-base;\r\n\r\n    &:focus {\r\n      border-color: $primary-color;\r\n      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.forgot-link[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  font-size: 0.78rem;\r\n  color: $primary-color;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n\r\n  &:hover { text-decoration: underline; }\r\n}\r\n\r\n.auth-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 13px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 18px rgba(99,102,241,0.40);\r\n  transition: all $transition-base;\r\n  margin-bottom: 20px;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-2px); }\r\n}\r\n\r\n.auth-divider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n\r\n  &::before, &::after {\r\n    content: '';\r\n    flex: 1;\r\n    height: 1px;\r\n    background: $border-color;\r\n  }\r\n\r\n  span {\r\n    font-size: 0.8rem;\r\n    color: $text-muted;\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\n.google-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: $surface;\r\n  color: $text-primary;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.9rem;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: $bg-secondary; border-color: $primary-color; }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .auth-page[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .auth-left[_ngcontent-%COMP%] { display: none; }\r\n  .auth-right[_ngcontent-%COMP%] { padding: 32px 24px; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthComponent, [{
        type: Component,
        args: [{ selector: 'app-auth', template: `
    <div class="auth-page">
      <!-- Left: Product Showcase -->
      <div class="auth-left">
        <div class="auth-left-content">
          <div class="brand-logo">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="7" width="20" height="14" rx="3" fill="white" fill-opacity="0.9"/>
              <rect x="6" y="3" width="12" height="6" rx="2" fill="white" fill-opacity="0.6"/>
            </svg>
            <span>Techify</span>
          </div>
          <h2>"The best keyboard I've ever typed on."</h2>
          <p>— Alex M., Verified Customer ⭐⭐⭐⭐⭐</p>
        </div>
        <img src="assets/keyboard_hero.png" alt="Premium Keyboard" class="auth-product-img" />
      </div>

      <!-- Right: Form -->
      <div class="auth-right">
        <div class="auth-form-card">
          <!-- Tab Switcher -->
          <div class="auth-tabs">
            <button [class.active]="activeTab === 'login'" (click)="activeTab = 'login'">Log In</button>
            <button [class.active]="activeTab === 'register'" (click)="activeTab = 'register'">Create Account</button>
          </div>

          <!-- Login Form -->
          <form class="auth-form" *ngIf="activeTab === 'login'">
            <h2>Welcome back</h2>
            <p class="form-subtitle">Sign in to your Techify account</p>

            <div class="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com" />
            </div>
            <div class="form-field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" class="auth-btn">Log In</button>
            <div class="auth-divider"><span>or continue with</span></div>
            <button type="button" class="google-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
          </form>

          <!-- Register Form -->
          <form class="auth-form" *ngIf="activeTab === 'register'">
            <h2>Join Techify</h2>
            <p class="form-subtitle">Create your account and start shopping</p>

            <div class="form-row">
              <div class="form-field">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div class="form-field">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div class="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com" />
            </div>
            <div class="form-field">
              <label>Password</label>
              <input type="password" placeholder="Create a strong password" />
            </div>
            <button type="submit" class="auth-btn">Create Account</button>
            <div class="auth-divider"><span>or continue with</span></div>
            <button type="button" class="google-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  `, styles: ["@import '../../../styles/variables';\r\n\r\n.auth-page {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* ===== Left Panel ===== */\r\n.auth-left {\r\n  background: linear-gradient(135deg, #6366F1 0%, #7C3AED 100%);\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 48px;\r\n}\r\n\r\n.auth-left-content {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.brand-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-bottom: 40px;\r\n\r\n  span {\r\n    font-family: $font-heading;\r\n    font-size: 1.4rem;\r\n    font-weight: 800;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.auth-left-content h2 {\r\n  font-family: $font-heading;\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: white;\r\n  line-height: 1.35;\r\n  margin-bottom: 12px;\r\n  font-style: italic;\r\n}\r\n\r\n.auth-left-content p {\r\n  color: rgba(255,255,255,0.75);\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.auth-product-img {\r\n  width: 100%;\r\n  border-radius: $radius-lg;\r\n  box-shadow: 0 20px 60px rgba(0,0,0,0.30);\r\n  transform: rotate(-3deg) scale(1.05);\r\n  transition: transform $transition-base;\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n  &:hover { transform: rotate(-1deg) scale(1.06); }\r\n}\r\n\r\n/* ===== Right Panel ===== */\r\n.auth-right {\r\n  background: $bg-primary;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 40px;\r\n}\r\n\r\n.auth-form-card {\r\n  width: 100%;\r\n  max-width: 440px;\r\n}\r\n\r\n.auth-tabs {\r\n  display: flex;\r\n  background: $bg-secondary;\r\n  border-radius: $radius-pill;\r\n  padding: 4px;\r\n  margin-bottom: 36px;\r\n\r\n  button {\r\n    flex: 1;\r\n    padding: 10px;\r\n    border-radius: $radius-pill;\r\n    border: none;\r\n    background: transparent;\r\n    font-family: $font-heading;\r\n    font-size: 0.9rem;\r\n    font-weight: 600;\r\n    color: $text-muted;\r\n    cursor: pointer;\r\n    transition: all $transition-base;\r\n\r\n    &.active {\r\n      background: $surface;\r\n      color: $primary-color;\r\n      box-shadow: $shadow-sm;\r\n    }\r\n  }\r\n}\r\n\r\n.auth-form {\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.6rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n    margin-bottom: 6px;\r\n  }\r\n}\r\n\r\n.form-subtitle {\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.form-row {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 12px;\r\n}\r\n\r\n.form-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin-bottom: 16px;\r\n  position: relative;\r\n\r\n  label {\r\n    font-size: 0.82rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-family: $font-heading;\r\n  }\r\n\r\n  input {\r\n    padding: 12px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    color: $text-primary;\r\n    background: $surface;\r\n    transition: border-color $transition-base;\r\n\r\n    &:focus {\r\n      border-color: $primary-color;\r\n      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.forgot-link {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  font-size: 0.78rem;\r\n  color: $primary-color;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n\r\n  &:hover { text-decoration: underline; }\r\n}\r\n\r\n.auth-btn {\r\n  width: 100%;\r\n  padding: 13px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 18px rgba(99,102,241,0.40);\r\n  transition: all $transition-base;\r\n  margin-bottom: 20px;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-2px); }\r\n}\r\n\r\n.auth-divider {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n\r\n  &::before, &::after {\r\n    content: '';\r\n    flex: 1;\r\n    height: 1px;\r\n    background: $border-color;\r\n  }\r\n\r\n  span {\r\n    font-size: 0.8rem;\r\n    color: $text-muted;\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\n.google-btn {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: $surface;\r\n  color: $text-primary;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.9rem;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: $bg-secondary; border-color: $primary-color; }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .auth-page { grid-template-columns: 1fr; }\r\n  .auth-left { display: none; }\r\n  .auth-right { padding: 32px 24px; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src\\app\\features\\auth\\auth.component.ts", lineNumber: 90 }); })();
//# sourceMappingURL=auth.component.js.map