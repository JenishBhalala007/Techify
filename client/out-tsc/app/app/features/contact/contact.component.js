import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Send Message \u2192");
    i0.ɵɵelementEnd();
} }
function ContactComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713 Message Sent!");
    i0.ɵɵelementEnd();
} }
function ContactComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 21)(4, "h4");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const info_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(info_r1.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(info_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(info_r1.value);
} }
export class ContactComponent {
    constructor() {
        this.sent = false;
        this.formData = { name: '', email: '', subject: '', message: '' };
        this.contactInfo = [
            { icon: '📧', label: 'Email Us', value: 'support@techify.com' },
            { icon: '📞', label: 'Call Us', value: '+1 (800) 832-4191' },
            { icon: '📍', label: 'Located At', value: 'San Francisco, CA 94102' }
        ];
    }
    onSubmit() {
        this.sent = true;
        setTimeout(() => { this.sent = false; this.formData = { name: '', email: '', subject: '', message: '' }; }, 3000);
    }
    static { this.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactComponent, selectors: [["app-contact"]], decls: 44, vars: 9, consts: [[1, "contact-page"], [1, "container"], [1, "page-title"], [1, "page-subtitle"], [1, "contact-layout"], [1, "contact-form-card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-field"], ["type", "text", "placeholder", "John Doe", "name", "name", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "you@email.com", "name", "email", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Order issue, product question...", "name", "subject", 3, "ngModelChange", "ngModel"], ["placeholder", "Tell us how we can help...", "rows", "5", "name", "message", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "send-btn"], [4, "ngIf"], [1, "contact-info"], ["class", "info-card", 4, "ngFor", "ngForOf"], [1, "whatsapp-btn"], [1, "office-hours"], [1, "info-card"], [1, "info-icon"], [1, "info-text"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "Get in Touch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 3);
            i0.ɵɵtext(5, "Have questions? We'd love to hear from you.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4)(7, "div", 5)(8, "h2");
            i0.ɵɵtext(9, "Send a Message");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "form", 6);
            i0.ɵɵlistener("ngSubmit", function ContactComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(11, "div", 7)(12, "div", 8)(13, "label");
            i0.ɵɵtext(14, "Your Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.formData.name, $event) || (ctx.formData.name = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 8)(17, "label");
            i0.ɵɵtext(18, "Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_19_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.formData.email, $event) || (ctx.formData.email = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "div", 8)(21, "label");
            i0.ɵɵtext(22, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_23_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.formData.subject, $event) || (ctx.formData.subject = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 8)(25, "label");
            i0.ɵɵtext(26, "Message");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "textarea", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.formData.message, $event) || (ctx.formData.message = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "button", 13);
            i0.ɵɵtemplate(29, ContactComponent_span_29_Template, 2, 0, "span", 14)(30, ContactComponent_span_30_Template, 2, 0, "span", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "div", 15);
            i0.ɵɵtemplate(32, ContactComponent_div_32_Template, 8, 3, "div", 16);
            i0.ɵɵelementStart(33, "div", 17)(34, "span");
            i0.ɵɵtext(35, "\uD83D\uDCAC");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(36, " Chat on WhatsApp ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 18)(38, "h4");
            i0.ɵɵtext(39, "Support Hours");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p");
            i0.ɵɵtext(41, "Mon\u2013Fri: 9am \u2013 6pm PST");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "p");
            i0.ɵɵtext(43, "Sat\u2013Sun: 10am \u2013 4pm PST");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.name);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.subject);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.message);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("sent", ctx.sent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.sent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sent);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.contactInfo);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm], styles: ["@import '../../../styles/variables';\r\n\r\n.contact-page[_ngcontent-%COMP%] {\r\n  padding: 60px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 2.4rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.page-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  color: $text-muted;\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.contact-layout[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 380px;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n.contact-form-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 40px;\r\n  box-shadow: $shadow-md;\r\n\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 28px;\r\n  }\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 16px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin-bottom: 16px;\r\n\r\n  label {\r\n    font-size: 0.82rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-family: $font-heading;\r\n  }\r\n\r\n  input, textarea {\r\n    padding: 12px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    color: $text-primary;\r\n    background: $bg-primary;\r\n    font-family: $font-body;\r\n    transition: border-color $transition-base;\r\n    resize: vertical;\r\n\r\n    &:focus {\r\n      border-color: $primary-color;\r\n      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.send-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 14px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 18px rgba(99,102,241,0.40);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-2px); }\r\n\r\n  &.sent {\r\n    background: #16A34A;\r\n    box-shadow: 0 4px 18px rgba(22,163,74,0.35);\r\n  }\r\n}\r\n\r\n\n\r\n.contact-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 22px;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { box-shadow: $shadow-sm; border-color: $border-accent; }\r\n}\r\n\r\n.info-icon[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  width: 48px;\r\n  height: 48px;\r\n  background: $highlight;\r\n  border-radius: $radius-md;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.info-text[_ngcontent-%COMP%] {\r\n  h4 {\r\n    font-family: $font-heading;\r\n    font-size: 0.85rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.9rem;\r\n    color: $text-muted;\r\n  }\r\n}\r\n\r\n.whatsapp-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 14px;\r\n  background: linear-gradient(135deg, #25D366, #128C7E);\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.95rem;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(37,211,102,0.40);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.50); }\r\n}\r\n\r\n.office-hours[_ngcontent-%COMP%] {\r\n  background: $bg-secondary;\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 22px;\r\n\r\n  h4 {\r\n    font-family: $font-heading;\r\n    font-size: 0.9rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.85rem;\r\n    color: $text-muted;\r\n    margin-bottom: 4px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .contact-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .form-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactComponent, [{
        type: Component,
        args: [{ selector: 'app-contact', template: `
    <div class="contact-page">
      <div class="container">
        <h1 class="page-title">Get in Touch</h1>
        <p class="page-subtitle">Have questions? We'd love to hear from you.</p>

        <div class="contact-layout">
          <!-- Form Card -->
          <div class="contact-form-card">
            <h2>Send a Message</h2>
            <form (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" [(ngModel)]="formData.name" name="name" />
                </div>
                <div class="form-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@email.com" [(ngModel)]="formData.email" name="email" />
                </div>
              </div>
              <div class="form-field">
                <label>Subject</label>
                <input type="text" placeholder="Order issue, product question..." [(ngModel)]="formData.subject" name="subject" />
              </div>
              <div class="form-field">
                <label>Message</label>
                <textarea placeholder="Tell us how we can help..." rows="5" [(ngModel)]="formData.message" name="message"></textarea>
              </div>
              <button type="submit" class="send-btn" [class.sent]="sent">
                <span *ngIf="!sent">Send Message →</span>
                <span *ngIf="sent">✓ Message Sent!</span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card" *ngFor="let info of contactInfo">
              <div class="info-icon">{{ info.icon }}</div>
              <div class="info-text">
                <h4>{{ info.label }}</h4>
                <p>{{ info.value }}</p>
              </div>
            </div>

            <div class="whatsapp-btn">
              <span>💬</span>
              Chat on WhatsApp
            </div>

            <div class="office-hours">
              <h4>Support Hours</h4>
              <p>Mon–Fri: 9am – 6pm PST</p>
              <p>Sat–Sun: 10am – 4pm PST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["@import '../../../styles/variables';\r\n\r\n.contact-page {\r\n  padding: 60px 0 80px;\r\n  background: $bg-primary;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-title {\r\n  font-family: $font-heading;\r\n  font-size: 2.4rem;\r\n  font-weight: 800;\r\n  color: $text-primary;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.page-subtitle {\r\n  font-size: 1rem;\r\n  color: $text-muted;\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.contact-layout {\r\n  display: grid;\r\n  grid-template-columns: 1fr 380px;\r\n  gap: 32px;\r\n  align-items: start;\r\n}\r\n\r\n.contact-form-card {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 40px;\r\n  box-shadow: $shadow-md;\r\n\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 28px;\r\n  }\r\n}\r\n\r\n.form-row {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 16px;\r\n}\r\n\r\n.form-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin-bottom: 16px;\r\n\r\n  label {\r\n    font-size: 0.82rem;\r\n    font-weight: 600;\r\n    color: $text-primary;\r\n    font-family: $font-heading;\r\n  }\r\n\r\n  input, textarea {\r\n    padding: 12px 14px;\r\n    border: 1.5px solid $border-color;\r\n    border-radius: $radius-md;\r\n    font-size: 0.9rem;\r\n    color: $text-primary;\r\n    background: $bg-primary;\r\n    font-family: $font-body;\r\n    transition: border-color $transition-base;\r\n    resize: vertical;\r\n\r\n    &:focus {\r\n      border-color: $primary-color;\r\n      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder { color: $text-muted; }\r\n  }\r\n}\r\n\r\n.send-btn {\r\n  width: 100%;\r\n  padding: 14px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 18px rgba(99,102,241,0.40);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-2px); }\r\n\r\n  &.sent {\r\n    background: #16A34A;\r\n    box-shadow: 0 4px 18px rgba(22,163,74,0.35);\r\n  }\r\n}\r\n\r\n/* Info Panel */\r\n.contact-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.info-card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 22px;\r\n  transition: all $transition-base;\r\n\r\n  &:hover { box-shadow: $shadow-sm; border-color: $border-accent; }\r\n}\r\n\r\n.info-icon {\r\n  font-size: 1.5rem;\r\n  width: 48px;\r\n  height: 48px;\r\n  background: $highlight;\r\n  border-radius: $radius-md;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.info-text {\r\n  h4 {\r\n    font-family: $font-heading;\r\n    font-size: 0.85rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.9rem;\r\n    color: $text-muted;\r\n  }\r\n}\r\n\r\n.whatsapp-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 14px;\r\n  background: linear-gradient(135deg, #25D366, #128C7E);\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 700;\r\n  font-size: 0.95rem;\r\n  border-radius: $radius-md;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 14px rgba(37,211,102,0.40);\r\n  transition: all $transition-base;\r\n\r\n  &:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.50); }\r\n}\r\n\r\n.office-hours {\r\n  background: $bg-secondary;\r\n  border: 1px solid $border-accent;\r\n  border-radius: $radius-lg;\r\n  padding: 20px 22px;\r\n\r\n  h4 {\r\n    font-family: $font-heading;\r\n    font-size: 0.9rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.85rem;\r\n    color: $text-muted;\r\n    margin-bottom: 4px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .contact-layout { grid-template-columns: 1fr; }\r\n  .form-row { grid-template-columns: 1fr; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\features\\contact\\contact.component.ts", lineNumber: 68 }); })();
//# sourceMappingURL=contact.component.js.map