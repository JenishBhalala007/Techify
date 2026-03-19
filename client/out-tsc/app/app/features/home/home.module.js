import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: HomeComponent }
];
export class HomeModule {
    static { this.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HomeModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule,
            RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeModule, [{
        type: NgModule,
        args: [{
                declarations: [HomeComponent],
                imports: [
                    SharedModule,
                    RouterModule.forChild(routes)
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeModule, { declarations: [HomeComponent], imports: [SharedModule, i1.RouterModule] }); })();
//# sourceMappingURL=home.module.js.map