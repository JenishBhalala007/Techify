import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: AuthComponent }
];
export class AuthModule {
    static { this.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [AuthComponent],
                imports: [SharedModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { declarations: [AuthComponent], imports: [SharedModule, i1.RouterModule] }); })();
//# sourceMappingURL=auth.module.js.map