import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./shared/components/navbar/navbar.component";
import * as i3 from "./shared/components/footer/footer.component";
export class AppComponent {
    constructor() {
        this.title = 'Techify';
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main", 0);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "app-footer");
        } }, dependencies: [i1.RouterOutlet, i2.NavbarComponent, i3.FooterComponent], styles: [".app-main[_ngcontent-%COMP%] {\n      min-height: calc(100vh - 72px);\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: `
    <app-navbar></app-navbar>
    <main class="app-main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `, styles: ["\n    .app-main {\n      min-height: calc(100vh - 72px);\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=app.component.js.map