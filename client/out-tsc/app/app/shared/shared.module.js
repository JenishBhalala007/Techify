import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import * as i0 from "@angular/core";
export class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule, CommonModule,
            RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavbarComponent,
                    FooterComponent,
                    ProductCardComponent
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    NavbarComponent,
                    FooterComponent,
                    ProductCardComponent,
                    CommonModule,
                    RouterModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [NavbarComponent,
        FooterComponent,
        ProductCardComponent], imports: [CommonModule, RouterModule], exports: [NavbarComponent,
        FooterComponent,
        ProductCardComponent,
        CommonModule,
        RouterModule] }); })();
//# sourceMappingURL=shared.module.js.map