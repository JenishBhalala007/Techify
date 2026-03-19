import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: CartViewComponent },
    { path: 'checkout', component: CheckoutComponent }
];
export class CartModule {
    static { this.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CartModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartModule, [{
        type: NgModule,
        args: [{
                declarations: [CartViewComponent, CheckoutComponent],
                imports: [SharedModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CartModule, { declarations: [CartViewComponent, CheckoutComponent], imports: [SharedModule, i1.RouterModule] }); })();
//# sourceMappingURL=cart.module.js.map