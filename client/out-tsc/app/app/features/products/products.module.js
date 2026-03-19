import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: ProductListComponent }
];
export class ProductsModule {
    static { this.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProductsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, FormsModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsModule, [{
        type: NgModule,
        args: [{
                declarations: [ProductListComponent],
                imports: [SharedModule, FormsModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProductsModule, { declarations: [ProductListComponent], imports: [SharedModule, FormsModule, i1.RouterModule] }); })();
//# sourceMappingURL=products.module.js.map