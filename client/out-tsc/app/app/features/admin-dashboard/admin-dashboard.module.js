import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: AdminDashboardComponent }];
export class AdminDashboardModule {
    static { this.ɵfac = function AdminDashboardModule_Factory(t) { return new (t || AdminDashboardModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AdminDashboardModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboardModule, [{
        type: NgModule,
        args: [{
                declarations: [AdminDashboardComponent],
                imports: [SharedModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AdminDashboardModule, { declarations: [AdminDashboardComponent], imports: [SharedModule, i1.RouterModule] }); })();
//# sourceMappingURL=admin-dashboard.module.js.map