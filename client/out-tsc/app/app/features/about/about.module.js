import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: AboutComponent }];
export class AboutModule {
    static { this.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AboutModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutModule, [{
        type: NgModule,
        args: [{
                declarations: [AboutComponent],
                imports: [SharedModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AboutModule, { declarations: [AboutComponent], imports: [SharedModule, i1.RouterModule] }); })();
//# sourceMappingURL=about.module.js.map