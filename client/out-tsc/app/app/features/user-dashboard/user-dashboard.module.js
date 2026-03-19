import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UserDashboardComponent } from './user-dashboard.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: UserDashboardComponent }];
export class UserDashboardModule {
    static { this.ɵfac = function UserDashboardModule_Factory(t) { return new (t || UserDashboardModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UserDashboardModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDashboardModule, [{
        type: NgModule,
        args: [{
                declarations: [UserDashboardComponent],
                imports: [SharedModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UserDashboardModule, { declarations: [UserDashboardComponent], imports: [SharedModule, i1.RouterModule] }); })();
//# sourceMappingURL=user-dashboard.module.js.map