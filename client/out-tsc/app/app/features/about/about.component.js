import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function AboutComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "span", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.number);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.label);
} }
function AboutComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 28);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 29);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r2.avatar);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r2.role);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r2.bio);
} }
function AboutComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r3.desc);
} }
export class AboutComponent {
    constructor() {
        this.stats = [
            { number: '50K+', label: 'Happy Customers' },
            { number: '200+', label: 'Curated Products' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '5', label: 'Years in Business' }
        ];
        this.team = [
            { avatar: '👨‍💻', name: 'Marcus Chen', role: 'Founder & CEO', bio: 'Mechanical keyboard obsessive since 2010. Built Techify to share his passion for great hardware.' },
            { avatar: '👩‍🎨', name: 'Anika Sharma', role: 'Head of Design', bio: 'Former UX lead at Apple. Ensures every Techify touchpoint is beautifully crafted.' },
            { avatar: '🧑‍🔬', name: 'Jordan Ellis', role: 'Product Curator', bio: 'Tests over 100 products a year to find the ones that make the cut.' }
        ];
        this.values = [
            { icon: '🔬', title: 'Rigorous Testing', desc: 'Every product is physically tested by our team before it lands in our catalog.' },
            { icon: '💬', title: 'Honest Reviews', desc: 'We call out flaws. Our reputation is built on trust, not affiliate commissions.' },
            { icon: '♻️', title: 'Sustainability', desc: 'We partner with manufacturers committed to responsible production practices.' },
            { icon: '🤝', title: 'Community First', desc: 'Our Discord has 30K+ members sharing tips, reviews, and custom builds.' }
        ];
    }
    static { this.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["app-about"]], decls: 46, vars: 3, consts: [[1, "about-page"], [1, "about-hero"], [1, "container"], [1, "hero-badge"], [1, "gradient-text"], [1, "hero-orb"], [1, "stats-section"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "mission-section"], [1, "mission-grid"], [1, "mission-text"], ["routerLink", "/products", 1, "btn-primary"], [1, "mission-image"], ["src", "assets/keyboard3.png", "alt", "Our Products"], [1, "team-section"], [1, "section-title", 2, "text-align", "center"], [1, "section-subtitle", 2, "text-align", "center"], [1, "team-grid"], ["class", "team-card", 4, "ngFor", "ngForOf"], [1, "values-section"], [1, "values-grid"], ["class", "value-card", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-num"], [1, "stat-lbl"], [1, "team-card"], [1, "member-avatar"], [1, "member-role"], [1, "member-bio"], [1, "value-card"], [1, "value-icon"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4, "About Techify");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Built for Those Who ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8, "Demand More");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "We believe the right tools unlock peak potential. Since 2020, Techify has sourced, tested, and curated the world's finest mechanical keyboards, gaming peripherals, and audio equipment \u2014 so you don't have to.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(11, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "section", 6)(13, "div", 2)(14, "div", 7);
            i0.ɵɵtemplate(15, AboutComponent_div_15_Template, 5, 2, "div", 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "section", 9)(17, "div", 2)(18, "div", 10)(19, "div", 11)(20, "h2");
            i0.ɵɵtext(21, "Our Mission");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "p");
            i0.ɵɵtext(23, "Technology should feel exceptional. Every keystroke, every click, every note heard through your headset \u2014 these micro-interactions add up to your entire digital experience.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵtext(25, "At Techify, we obsess over quality so you can focus on what matters: creating, competing, and communicating without friction.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "a", 12);
            i0.ɵɵtext(27, "Explore Products");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 13);
            i0.ɵɵelement(29, "img", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(30, "section", 15)(31, "div", 2)(32, "h2", 16);
            i0.ɵɵtext(33, "Meet the Team");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "p", 17);
            i0.ɵɵtext(35, "The enthusiasts behind Techify");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 18);
            i0.ɵɵtemplate(37, AboutComponent_div_37_Template, 9, 4, "div", 19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "section", 20)(39, "div", 2)(40, "h2", 16);
            i0.ɵɵtext(41, "Our Values");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "p", 17);
            i0.ɵɵtext(43, "What drives us every day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 21);
            i0.ɵɵtemplate(45, AboutComponent_div_45_Template, 7, 3, "div", 22);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.stats);
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("ngForOf", ctx.team);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.values);
        } }, dependencies: [i1.NgForOf, i2.RouterLink], styles: ["@import '../../../styles/variables';\r\n\r\n.about-page[_ngcontent-%COMP%] { overflow: hidden; }\r\n\r\n\n\r\n.about-hero[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: linear-gradient(135deg, $bg-primary 0%, $bg-secondary 100%);\r\n  padding: 80px 0;\r\n  text-align: center;\r\n  overflow: hidden;\r\n\r\n  h1 {\r\n    font-family: $font-heading;\r\n    font-size: 3rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n    line-height: 1.15;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  p {\r\n    max-width: 640px;\r\n    margin: 0 auto;\r\n    color: $text-muted;\r\n    font-size: 1.05rem;\r\n    line-height: 1.75;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n}\r\n\r\n.hero-badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-size: 0.82rem;\r\n  font-weight: 600;\r\n  font-family: $font-heading;\r\n  padding: 6px 16px;\r\n  border-radius: $radius-pill;\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n  z-index: 2;\r\n  border: 1px solid $border-accent;\r\n}\r\n\r\n.gradient-text[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.hero-orb[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 600px;\r\n  height: 600px;\r\n  background: radial-gradient(circle, rgba(99,102,241,0.12), transparent);\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 50%;\r\n  pointer-events: none;\r\n}\r\n\r\n\n\r\n.stats-section[_ngcontent-%COMP%] { padding: 60px 0; background: $surface; }\r\n\r\n.stats-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 1px;\r\n  background: $border-color;\r\n  border-radius: $radius-lg;\r\n  overflow: hidden;\r\n  box-shadow: $shadow-sm;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  padding: 40px 24px;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n\r\n  .stat-num {\r\n    font-family: $font-heading;\r\n    font-size: 2.2rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n  }\r\n\r\n  .stat-lbl { font-size: 0.88rem; color: $text-muted; }\r\n}\r\n\r\n\n\r\n.mission-section[_ngcontent-%COMP%] { padding: 80px 0; background: $bg-primary; }\r\n\r\n.mission-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 60px;\r\n  align-items: center;\r\n}\r\n\r\n.mission-text[_ngcontent-%COMP%] {\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  p {\r\n    font-size: 1rem;\r\n    color: $text-muted;\r\n    line-height: 1.75;\r\n    margin-bottom: 16px;\r\n  }\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  padding: 12px 28px;\r\n  border-radius: $radius-pill;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n  margin-top: 8px;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-2px); }\r\n}\r\n\r\n.mission-image[_ngcontent-%COMP%] {\r\n  img {\r\n    width: 100%;\r\n    border-radius: $radius-lg;\r\n    box-shadow: $shadow-lg;\r\n    transition: transform $transition-base;\r\n\r\n    &:hover { transform: scale(1.02); }\r\n  }\r\n}\r\n\r\n\n\r\n.team-section[_ngcontent-%COMP%] {\r\n  padding: 80px 0;\r\n  background: $bg-secondary;\r\n}\r\n\r\n.team-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.team-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 32px 28px;\r\n  text-align: center;\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    box-shadow: $shadow-md;\r\n    border-color: $border-accent;\r\n    transform: translateY(-4px);\r\n  }\r\n}\r\n\r\n.member-avatar[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  margin-bottom: 16px;\r\n  width: 72px;\r\n  height: 72px;\r\n  background: $highlight;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto 16px;\r\n}\r\n\r\n.team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-family: $font-heading;\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.member-role[_ngcontent-%COMP%] {\r\n  font-size: 0.82rem;\r\n  color: $primary-color;\r\n  font-weight: 600;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.member-bio[_ngcontent-%COMP%] {\r\n  font-size: 0.88rem;\r\n  color: $text-muted;\r\n  line-height: 1.65;\r\n}\r\n\r\n\n\r\n.values-section[_ngcontent-%COMP%] { padding: 80px 0; background: $bg-primary; }\r\n\r\n.values-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 24px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.value-card[_ngcontent-%COMP%] {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 20px;\r\n  text-align: center;\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    box-shadow: $shadow-md;\r\n    border-color: $border-accent;\r\n    transform: translateY(-4px);\r\n  }\r\n\r\n  .value-icon {\r\n    font-size: 1.8rem;\r\n    width: 56px;\r\n    height: 56px;\r\n    background: $highlight;\r\n    border-radius: $radius-md;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 16px;\r\n  }\r\n\r\n  h3 {\r\n    font-family: $font-heading;\r\n    font-size: 0.95rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  p { font-size: 0.85rem; color: $text-muted; line-height: 1.65; }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .values-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .mission-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .team-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\r\n  .about-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 2.2rem; }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .team-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .values-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutComponent, [{
        type: Component,
        args: [{ selector: 'app-about', template: `
    <div class="about-page">
      <!-- Hero -->
      <section class="about-hero">
        <div class="container">
          <div class="hero-badge">About Techify</div>
          <h1>Built for Those Who <span class="gradient-text">Demand More</span></h1>
          <p>We believe the right tools unlock peak potential. Since 2020, Techify has sourced, tested, and curated the world's finest mechanical keyboards, gaming peripherals, and audio equipment — so you don't have to.</p>
        </div>
        <div class="hero-orb"></div>
      </section>

      <!-- Stats -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card" *ngFor="let s of stats">
              <span class="stat-num">{{ s.number }}</span>
              <span class="stat-lbl">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission -->
      <section class="mission-section">
        <div class="container">
          <div class="mission-grid">
            <div class="mission-text">
              <h2>Our Mission</h2>
              <p>Technology should feel exceptional. Every keystroke, every click, every note heard through your headset — these micro-interactions add up to your entire digital experience.</p>
              <p>At Techify, we obsess over quality so you can focus on what matters: creating, competing, and communicating without friction.</p>
              <a routerLink="/products" class="btn-primary">Explore Products</a>
            </div>
            <div class="mission-image">
              <img src="assets/keyboard3.png" alt="Our Products" />
            </div>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="team-section">
        <div class="container">
          <h2 class="section-title" style="text-align:center">Meet the Team</h2>
          <p class="section-subtitle" style="text-align:center">The enthusiasts behind Techify</p>
          <div class="team-grid">
            <div class="team-card" *ngFor="let m of team">
              <div class="member-avatar">{{ m.avatar }}</div>
              <h3>{{ m.name }}</h3>
              <p class="member-role">{{ m.role }}</p>
              <p class="member-bio">{{ m.bio }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="values-section">
        <div class="container">
          <h2 class="section-title" style="text-align:center">Our Values</h2>
          <p class="section-subtitle" style="text-align:center">What drives us every day</p>
          <div class="values-grid">
            <div class="value-card" *ngFor="let v of values">
              <div class="value-icon">{{ v.icon }}</div>
              <h3>{{ v.title }}</h3>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `, styles: ["@import '../../../styles/variables';\r\n\r\n.about-page { overflow: hidden; }\r\n\r\n/* Hero */\r\n.about-hero {\r\n  position: relative;\r\n  background: linear-gradient(135deg, $bg-primary 0%, $bg-secondary 100%);\r\n  padding: 80px 0;\r\n  text-align: center;\r\n  overflow: hidden;\r\n\r\n  h1 {\r\n    font-family: $font-heading;\r\n    font-size: 3rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n    line-height: 1.15;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  p {\r\n    max-width: 640px;\r\n    margin: 0 auto;\r\n    color: $text-muted;\r\n    font-size: 1.05rem;\r\n    line-height: 1.75;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n}\r\n\r\n.hero-badge {\r\n  display: inline-block;\r\n  background: $highlight;\r\n  color: $primary-color;\r\n  font-size: 0.82rem;\r\n  font-weight: 600;\r\n  font-family: $font-heading;\r\n  padding: 6px 16px;\r\n  border-radius: $radius-pill;\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n  z-index: 2;\r\n  border: 1px solid $border-accent;\r\n}\r\n\r\n.gradient-text {\r\n  background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.hero-orb {\r\n  position: absolute;\r\n  width: 600px;\r\n  height: 600px;\r\n  background: radial-gradient(circle, rgba(99,102,241,0.12), transparent);\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 50%;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Stats */\r\n.stats-section { padding: 60px 0; background: $surface; }\r\n\r\n.stats-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 1px;\r\n  background: $border-color;\r\n  border-radius: $radius-lg;\r\n  overflow: hidden;\r\n  box-shadow: $shadow-sm;\r\n}\r\n\r\n.stat-card {\r\n  background: $surface;\r\n  padding: 40px 24px;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n\r\n  .stat-num {\r\n    font-family: $font-heading;\r\n    font-size: 2.2rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #6366F1, #A78BFA);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n  }\r\n\r\n  .stat-lbl { font-size: 0.88rem; color: $text-muted; }\r\n}\r\n\r\n/* Mission */\r\n.mission-section { padding: 80px 0; background: $bg-primary; }\r\n\r\n.mission-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 60px;\r\n  align-items: center;\r\n}\r\n\r\n.mission-text {\r\n  h2 {\r\n    font-family: $font-heading;\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    color: $text-primary;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  p {\r\n    font-size: 1rem;\r\n    color: $text-muted;\r\n    line-height: 1.75;\r\n    margin-bottom: 16px;\r\n  }\r\n}\r\n\r\n.btn-primary {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  background: $primary-color;\r\n  color: white;\r\n  font-family: $font-heading;\r\n  font-weight: 600;\r\n  padding: 12px 28px;\r\n  border-radius: $radius-pill;\r\n  text-decoration: none;\r\n  box-shadow: 0 4px 14px rgba(99,102,241,0.35);\r\n  transition: all $transition-base;\r\n  margin-top: 8px;\r\n\r\n  &:hover { background: darken(#6366F1, 8%); transform: translateY(-2px); }\r\n}\r\n\r\n.mission-image {\r\n  img {\r\n    width: 100%;\r\n    border-radius: $radius-lg;\r\n    box-shadow: $shadow-lg;\r\n    transition: transform $transition-base;\r\n\r\n    &:hover { transform: scale(1.02); }\r\n  }\r\n}\r\n\r\n/* Team */\r\n.team-section {\r\n  padding: 80px 0;\r\n  background: $bg-secondary;\r\n}\r\n\r\n.team-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.team-card {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 32px 28px;\r\n  text-align: center;\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    box-shadow: $shadow-md;\r\n    border-color: $border-accent;\r\n    transform: translateY(-4px);\r\n  }\r\n}\r\n\r\n.member-avatar {\r\n  font-size: 3rem;\r\n  margin-bottom: 16px;\r\n  width: 72px;\r\n  height: 72px;\r\n  background: $highlight;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto 16px;\r\n}\r\n\r\n.team-card h3 {\r\n  font-family: $font-heading;\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: $text-primary;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.member-role {\r\n  font-size: 0.82rem;\r\n  color: $primary-color;\r\n  font-weight: 600;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.member-bio {\r\n  font-size: 0.88rem;\r\n  color: $text-muted;\r\n  line-height: 1.65;\r\n}\r\n\r\n/* Values */\r\n.values-section { padding: 80px 0; background: $bg-primary; }\r\n\r\n.values-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 24px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.value-card {\r\n  background: $surface;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-lg;\r\n  padding: 28px 20px;\r\n  text-align: center;\r\n  transition: all $transition-base;\r\n\r\n  &:hover {\r\n    box-shadow: $shadow-md;\r\n    border-color: $border-accent;\r\n    transform: translateY(-4px);\r\n  }\r\n\r\n  .value-icon {\r\n    font-size: 1.8rem;\r\n    width: 56px;\r\n    height: 56px;\r\n    background: $highlight;\r\n    border-radius: $radius-md;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 16px;\r\n  }\r\n\r\n  h3 {\r\n    font-family: $font-heading;\r\n    font-size: 0.95rem;\r\n    font-weight: 700;\r\n    color: $text-primary;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  p { font-size: 0.85rem; color: $text-muted; line-height: 1.65; }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .values-grid { grid-template-columns: repeat(2, 1fr); }\r\n  .stats-grid { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .mission-grid { grid-template-columns: 1fr; }\r\n  .team-grid { grid-template-columns: 1fr 1fr; }\r\n  .about-hero h1 { font-size: 2.2rem; }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .team-grid { grid-template-columns: 1fr; }\r\n  .values-grid { grid-template-columns: 1fr; }\r\n  .stats-grid { grid-template-columns: 1fr 1fr; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\features\\about\\about.component.ts", lineNumber: 80 }); })();
//# sourceMappingURL=about.component.js.map