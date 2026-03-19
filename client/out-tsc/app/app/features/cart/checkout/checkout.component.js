import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function CheckoutComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "1");
    i0.ɵɵelementEnd();
} }
function CheckoutComponent__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "polyline", 23);
    i0.ɵɵelementEnd();
} }
function CheckoutComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "2");
    i0.ɵɵelementEnd();
} }
function CheckoutComponent__svg_svg_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "polyline", 23);
    i0.ɵɵelementEnd();
} }
function CheckoutComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2, "Shipping Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 25)(4, "div", 26)(5, "label");
    i0.ɵɵtext(6, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 26)(9, "label");
    i0.ɵɵtext(10, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 29)(13, "label");
    i0.ɵɵtext(14, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 29)(17, "label");
    i0.ɵɵtext(18, "Street Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 26)(21, "label");
    i0.ɵɵtext(22, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 26)(25, "label");
    i0.ɵɵtext(26, "ZIP Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "button", 34);
    i0.ɵɵlistener("click", function CheckoutComponent_div_26_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.currentStep = 2); });
    i0.ɵɵtext(29, "Continue to Payment \u2192");
    i0.ɵɵelementEnd()();
} }
function CheckoutComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2, "Payment Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 35);
    i0.ɵɵelement(4, "div", 36);
    i0.ɵɵelementStart(5, "p", 37);
    i0.ɵɵtext(6, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 38);
    i0.ɵɵtext(8, "JOHN DOE");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 25)(10, "div", 29)(11, "label");
    i0.ɵɵtext(12, "Card Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "input", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 26)(15, "label");
    i0.ɵɵtext(16, "Expiry Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 26)(19, "label");
    i0.ɵɵtext(20, "CVV");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 42)(23, "button", 43);
    i0.ɵɵlistener("click", function CheckoutComponent_div_27_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.currentStep = 1); });
    i0.ɵɵtext(24, "\u2190 Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 34);
    i0.ɵɵlistener("click", function CheckoutComponent_div_27_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.currentStep = 3); });
    i0.ɵɵtext(26, "Review Order \u2192");
    i0.ɵɵelementEnd()()();
} }
function CheckoutComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2, "Order Confirmed! \uD83C\uDF89");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 44);
    i0.ɵɵtext(4, "Thank you for your order. You'll receive a confirmation email shortly.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 45);
    i0.ɵɵtext(6, "Order #TFY-28419");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 46);
    i0.ɵɵtext(8, "Continue Shopping");
    i0.ɵɵelementEnd()();
} }
export class CheckoutComponent {
    constructor() {
        this.currentStep = 1;
    }
    static { this.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 55, vars: 21, consts: [[1, "checkout-page"], [1, "container"], [1, "page-title"], [1, "step-bar"], [1, "step"], [1, "step-circle"], [4, "ngIf"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", 4, "ngIf"], [1, "step-label"], [1, "step-line"], [1, "checkout-layout"], [1, "checkout-form"], ["class", "form-card", 4, "ngIf"], [1, "summary-panel"], [1, "summary-product"], ["src", "assets/keyboard1.png", "alt", "Keyboard"], [1, "prod-name"], [1, "prod-price"], [1, "summary-divider"], [1, "summary-row"], [1, "green"], [1, "summary-total"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [1, "form-card"], [1, "form-grid"], [1, "form-field"], ["type", "text", "placeholder", "John"], ["type", "text", "placeholder", "Doe"], [1, "form-field", "full"], ["type", "email", "placeholder", "john@email.com"], ["type", "text", "placeholder", "123 Main Street, Apt 4B"], ["type", "text", "placeholder", "New York"], ["type", "text", "placeholder", "10001"], [1, "step-btn", 3, "click"], [1, "card-visual"], [1, "card-chip"], [1, "card-number"], [1, "card-holder"], ["type", "text", "placeholder", "1234 5678 9012 3456"], ["type", "text", "placeholder", "MM / YY"], ["type", "text", "placeholder", "\u2022\u2022\u2022"], [1, "step-btns"], [1, "step-btn-back", 3, "click"], [1, "confirm-text"], [1, "order-number"], ["routerLink", "/", 1, "step-btn", 2, "text-decoration", "none", "display", "inline-block", "text-align", "center"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "Checkout");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
            i0.ɵɵtemplate(7, CheckoutComponent_span_7_Template, 2, 0, "span", 6)(8, CheckoutComponent__svg_svg_8_Template, 2, 0, "svg", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵtext(10, "Address");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(11, "div", 9);
            i0.ɵɵelementStart(12, "div", 4)(13, "div", 5);
            i0.ɵɵtemplate(14, CheckoutComponent_span_14_Template, 2, 0, "span", 6)(15, CheckoutComponent__svg_svg_15_Template, 2, 0, "svg", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 8);
            i0.ɵɵtext(17, "Payment");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(18, "div", 9);
            i0.ɵɵelementStart(19, "div", 4)(20, "div", 5);
            i0.ɵɵtext(21, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span", 8);
            i0.ɵɵtext(23, "Review");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "div", 10)(25, "div", 11);
            i0.ɵɵtemplate(26, CheckoutComponent_div_26_Template, 30, 0, "div", 12)(27, CheckoutComponent_div_27_Template, 27, 0, "div", 12)(28, CheckoutComponent_div_28_Template, 9, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "aside", 13)(30, "h3");
            i0.ɵɵtext(31, "Order Summary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 14);
            i0.ɵɵelement(33, "img", 15);
            i0.ɵɵelementStart(34, "div")(35, "p", 16);
            i0.ɵɵtext(36, "Apex Pro TKL Wireless");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p", 17);
            i0.ɵɵtext(38, "$219.99 \u00D7 1");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(39, "div", 18);
            i0.ɵɵelementStart(40, "div", 19)(41, "span");
            i0.ɵɵtext(42, "Subtotal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44, "$219.99");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 19)(46, "span");
            i0.ɵɵtext(47, "Shipping");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "span", 20);
            i0.ɵɵtext(49, "FREE");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 21)(51, "span");
            i0.ɵɵtext(52, "Total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span");
            i0.ɵɵtext(54, "$219.99");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("active", ctx.currentStep >= 1)("done", ctx.currentStep > 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.currentStep <= 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentStep > 1);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.currentStep > 1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.currentStep >= 2)("done", ctx.currentStep > 2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.currentStep <= 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentStep > 2);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.currentStep > 2);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.currentStep >= 3);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.currentStep === 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentStep === 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentStep === 3);
        } }, dependencies: [i1.NgIf, i2.RouterLink], styles: ["@import '../../../../styles/variables';\r\n\r\n.checkout-page[_ngcontent-%COMP%] {\r\n  padding: 40px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  margin-bottom: 36px;\r\n}\r\n\r\n\n\r\n.step-bar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 48px;\r\n  max-width: 500px;\r\n}\r\n\r\n.step[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.step-circle[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  background: $border-color;\r\n  color: $text-muted;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  transition: all $transition-base;\r\n}\r\n\r\n.step.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\r\n  background: $primary-color;\r\n  color: white;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.40);\r\n}\r\n\r\n.step.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\r\n  background: #22C55E;\r\n  color: white;\r\n}\r\n\r\n.step-label[_ngcontent-%COMP%] {\r\n  font-size: 0.78rem;\r\n  font-weight: 600;\r\n  color: $text-muted;\r\n  font-family: $font-heading;\r\n}\r\n\r\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] { color: $primary-color; }\r\n\r\n.step-line[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  height: 2px;\r\n  background: $border-color;\r\n  margin: 0 12px;\r\n  margin-bottom: 24px;\r\n  transition: background $transition-base;\r\n\r\n  &.active { background: $primary-color; }\r\n}\r\n\r\n\n\r\n.checkout-layout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 360px;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n\n\r\n.form-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 36px;\r\n  box-shadow: $shadow-md;\r\n\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 28px;\r\n  }\r\n}\r\n\r\n.form-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 16px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n\r\n  &.full { grid-column: 1 / -1; }\r\n\r\n  label {\r\n    font-size: 0.82rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-family: $font-heading;\r\n  }\r\n\r\n  input {\r\n    padding: 11px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    color: $text-primary;\r\n    background: $bg-primary;\r\n    transition: border-color $transition-base;\r\n\r\n    &:focus {\r\n      border-color: $primary-color;\r\n      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n\n\r\n.card-visual[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #6366F1, #7C3AED);\r\n  border-radius: $radius-lg;\r\n  padding: 24px 28px;\r\n  margin-bottom: 24px;\r\n  position: relative;\r\n  min-height: 120px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  gap: 8px;\r\n  box-shadow: 0 8px 28px rgba(99,102,241,0.40);\r\n}\r\n\r\n.card-chip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 24px;\r\n  left: 28px;\r\n  width: 36px;\r\n  height: 28px;\r\n  background: rgba(255,255,255,0.25);\r\n  border-radius: 6px;\r\n  border: 1px solid rgba(255,255,255,0.40);\r\n}\r\n\r\n.card-number[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: white;\r\n  letter-spacing: 0.14em;\r\n}\r\n\r\n.card-holder[_ngcontent-%COMP%] {\r\n  font-size: 0.82rem;\r\n  color: rgba(255,255,255,0.80);\r\n  letter-spacing: 0.06em;\r\n}\r\n\r\n.step-btns[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 12px;\r\n}\r\n\r\n.step-btn[_ngcontent-%COMP%] {\r\n  padding: 13px 28px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.95rem;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-1px); }\r\n}\r\n\r\n.step-btn-back[_ngcontent-%COMP%] {\r\n  padding: 13px 20px;\r\n  background: $bg-secondary;\r\n  color: $text-muted;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.95rem;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: $border-color; color: $text-primary; }\r\n}\r\n\r\n\n\r\n.confirm-text[_ngcontent-%COMP%] { color: $text-muted; margin-bottom: 20px; line-height: 1.7; }\r\n\r\n.order-number[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  padding: 8px 16px;\r\n  border-radius: $radius-md;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n\n\r\n.summary-panel[_ngcontent-%COMP%] {\r\n  background: $bg-secondary;\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 24px;\r\n  position: sticky;\r\n  top: 90px;\r\n\r\n  h3 {\r\n    font-family: $font-heading;\r\n    font-size: 1.05rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.summary-product[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 14px;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n\r\n  img {\r\n    width: 60px;\r\n    height: 50px;\r\n    object-fit: cover;\r\n    border-radius: $radius-md;\r\n    background: $surface;\r\n  }\r\n\r\n  .prod-name {\r\n    font-family: $font-heading;\r\n    font-size: 0.88rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .prod-price {\r\n    font-size: 0.82rem;\r\n    color: $text-muted;\r\n  }\r\n}\r\n\r\n.summary-divider[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  background: $border-color;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.summary-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n  margin-bottom: 10px;\r\n\r\n  .green { color: #16A34A; font-weight: 600; }\r\n}\r\n\r\n.summary-total[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-family: $font-heading;\r\n  font-size: 1.05rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  padding-top: 14px;\r\n  border-top: 1.5px solid $border-color;\r\n  margin-top: 8px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .checkout-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .summary-panel[_ngcontent-%COMP%] { position: static; }\r\n  .form-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutComponent, [{
        type: Component,
        args: [{ selector: 'app-checkout', template: `
    <div class="checkout-page">
      <div class="container">
        <h1 class="page-title">Checkout</h1>

        <!-- Step Indicator -->
        <div class="step-bar">
          <div class="step" [class.active]="currentStep >= 1" [class.done]="currentStep > 1">
            <div class="step-circle">
              <span *ngIf="currentStep <= 1">1</span>
              <svg *ngIf="currentStep > 1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span class="step-label">Address</span>
          </div>
          <div class="step-line" [class.active]="currentStep > 1"></div>
          <div class="step" [class.active]="currentStep >= 2" [class.done]="currentStep > 2">
            <div class="step-circle">
              <span *ngIf="currentStep <= 2">2</span>
              <svg *ngIf="currentStep > 2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span class="step-label">Payment</span>
          </div>
          <div class="step-line" [class.active]="currentStep > 2"></div>
          <div class="step" [class.active]="currentStep >= 3">
            <div class="step-circle">3</div>
            <span class="step-label">Review</span>
          </div>
        </div>

        <div class="checkout-layout">
          <!-- Form Panel -->
          <div class="checkout-form">

            <!-- Step 1: Address -->
            <div class="form-card" *ngIf="currentStep === 1">
              <h2>Shipping Address</h2>
              <div class="form-grid">
                <div class="form-field">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div class="form-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
                <div class="form-field full">
                  <label>Email</label>
                  <input type="email" placeholder="john@email.com" />
                </div>
                <div class="form-field full">
                  <label>Street Address</label>
                  <input type="text" placeholder="123 Main Street, Apt 4B" />
                </div>
                <div class="form-field">
                  <label>City</label>
                  <input type="text" placeholder="New York" />
                </div>
                <div class="form-field">
                  <label>ZIP Code</label>
                  <input type="text" placeholder="10001" />
                </div>
              </div>
              <button class="step-btn" (click)="currentStep = 2">Continue to Payment →</button>
            </div>

            <!-- Step 2: Payment -->
            <div class="form-card" *ngIf="currentStep === 2">
              <h2>Payment Details</h2>
              <div class="card-visual">
                <div class="card-chip"></div>
                <p class="card-number">•••• •••• •••• 4242</p>
                <p class="card-holder">JOHN DOE</p>
              </div>
              <div class="form-grid">
                <div class="form-field full">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>
                <div class="form-field">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM / YY" />
                </div>
                <div class="form-field">
                  <label>CVV</label>
                  <input type="text" placeholder="•••" />
                </div>
              </div>
              <div class="step-btns">
                <button class="step-btn-back" (click)="currentStep = 1">← Back</button>
                <button class="step-btn" (click)="currentStep = 3">Review Order →</button>
              </div>
            </div>

            <!-- Step 3: Review -->
            <div class="form-card" *ngIf="currentStep === 3">
              <h2>Order Confirmed! 🎉</h2>
              <p class="confirm-text">Thank you for your order. You'll receive a confirmation email shortly.</p>
              <div class="order-number">Order #TFY-28419</div>
              <a routerLink="/" class="step-btn" style="text-decoration:none;display:inline-block;text-align:center">Continue Shopping</a>
            </div>

          </div>

          <!-- Order Summary -->
          <aside class="summary-panel">
            <h3>Order Summary</h3>
            <div class="summary-product">
              <img src="assets/keyboard1.png" alt="Keyboard" />
              <div>
                <p class="prod-name">Apex Pro TKL Wireless</p>
                <p class="prod-price">$219.99 × 1</p>
              </div>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row">
              <span>Subtotal</span><span>$219.99</span>
            </div>
            <div class="summary-row">
              <span>Shipping</span><span class="green">FREE</span>
            </div>
            <div class="summary-total">
              <span>Total</span><span>$219.99</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  `, styles: ["@import '../../../../styles/variables';\r\n\r\n.checkout-page {\r\n  padding: 40px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-title {\r\n  font-family: $font-heading;\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  margin-bottom: 36px;\r\n}\r\n\r\n/* Step Bar */\r\n.step-bar {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 48px;\r\n  max-width: 500px;\r\n}\r\n\r\n.step {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.step-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  background: $border-color;\r\n  color: $text-muted;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  transition: all $transition-base;\r\n}\r\n\r\n.step.active .step-circle {\r\n  background: $primary-color;\r\n  color: white;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.40);\r\n}\r\n\r\n.step.done .step-circle {\r\n  background: #22C55E;\r\n  color: white;\r\n}\r\n\r\n.step-label {\r\n  font-size: 0.78rem;\r\n  font-weight: 600;\r\n  color: $text-muted;\r\n  font-family: $font-heading;\r\n}\r\n\r\n.step.active .step-label { color: $primary-color; }\r\n\r\n.step-line {\r\n  flex: 1;\r\n  height: 2px;\r\n  background: $border-color;\r\n  margin: 0 12px;\r\n  margin-bottom: 24px;\r\n  transition: background $transition-base;\r\n\r\n  &.active { background: $primary-color; }\r\n}\r\n\r\n/* Layout */\r\n.checkout-layout {\r\n  display: grid;\r\n  grid-template-columns: 1fr 360px;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n/* Form Card */\r\n.form-card {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 36px;\r\n  box-shadow: $shadow-md;\r\n\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 28px;\r\n  }\r\n}\r\n\r\n.form-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 16px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.form-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n\r\n  &.full { grid-column: 1 / -1; }\r\n\r\n  label {\r\n    font-size: 0.82rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-family: $font-heading;\r\n  }\r\n\r\n  input {\r\n    padding: 11px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    color: $text-primary;\r\n    background: $bg-primary;\r\n    transition: border-color $transition-base;\r\n\r\n    &:focus {\r\n      border-color: $primary-color;\r\n      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n/* Card Visual */\r\n.card-visual {\r\n  background: linear-gradient(135deg, #6366F1, #7C3AED);\r\n  border-radius: $radius-lg;\r\n  padding: 24px 28px;\r\n  margin-bottom: 24px;\r\n  position: relative;\r\n  min-height: 120px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  gap: 8px;\r\n  box-shadow: 0 8px 28px rgba(99,102,241,0.40);\r\n}\r\n\r\n.card-chip {\r\n  position: absolute;\r\n  top: 24px;\r\n  left: 28px;\r\n  width: 36px;\r\n  height: 28px;\r\n  background: rgba(255,255,255,0.25);\r\n  border-radius: 6px;\r\n  border: 1px solid rgba(255,255,255,0.40);\r\n}\r\n\r\n.card-number {\r\n  font-family: $font-heading;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: white;\r\n  letter-spacing: 0.14em;\r\n}\r\n\r\n.card-holder {\r\n  font-size: 0.82rem;\r\n  color: rgba(255,255,255,0.80);\r\n  letter-spacing: 0.06em;\r\n}\r\n\r\n.step-btns {\r\n  display: flex;\r\n  gap: 12px;\r\n}\r\n\r\n.step-btn {\r\n  padding: 13px 28px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.95rem;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-1px); }\r\n}\r\n\r\n.step-btn-back {\r\n  padding: 13px 20px;\r\n  background: $bg-secondary;\r\n  color: $text-muted;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  font-size: 0.95rem;\r\n  border: 1.5px solid $border-color;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: $border-color; color: $text-primary; }\r\n}\r\n\r\n/* Confirmation */\r\n.confirm-text { color: $text-muted; margin-bottom: 20px; line-height: 1.7; }\r\n\r\n.order-number {\r\n  display: inline-block;\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  padding: 8px 16px;\r\n  border-radius: $radius-md;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n/* Summary Panel */\r\n.summary-panel {\r\n  background: $bg-secondary;\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 24px;\r\n  position: sticky;\r\n  top: 90px;\r\n\r\n  h3 {\r\n    font-family: $font-heading;\r\n    font-size: 1.05rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.summary-product {\r\n  display: flex;\r\n  gap: 14px;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n\r\n  img {\r\n    width: 60px;\r\n    height: 50px;\r\n    object-fit: cover;\r\n    border-radius: $radius-md;\r\n    background: $surface;\r\n  }\r\n\r\n  .prod-name {\r\n    font-family: $font-heading;\r\n    font-size: 0.88rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .prod-price {\r\n    font-size: 0.82rem;\r\n    color: $text-muted;\r\n  }\r\n}\r\n\r\n.summary-divider {\r\n  height: 1px;\r\n  background: $border-color;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.summary-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.9rem;\r\n  color: $text-muted;\r\n  margin-bottom: 10px;\r\n\r\n  .green { color: #16A34A; font-weight: 600; }\r\n}\r\n\r\n.summary-total {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-family: $font-heading;\r\n  font-size: 1.05rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  padding-top: 14px;\r\n  border-top: 1.5px solid $border-color;\r\n  margin-top: 8px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .checkout-layout { grid-template-columns: 1fr; }\r\n  .summary-panel { position: static; }\r\n  .form-grid { grid-template-columns: 1fr; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\features\\cart\\checkout\\checkout.component.ts", lineNumber: 135 }); })();
//# sourceMappingURL=checkout.component.js.map