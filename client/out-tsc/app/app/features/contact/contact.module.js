import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from './contact.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: ContactComponent }];
export class ContactModule {
    static { this.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContactModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, FormsModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactModule, [{
        type: NgModule,
        args: [{
                declarations: [ContactComponent],
                imports: [SharedModule, FormsModule, RouterModule.forChild(routes)]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContactModule, { declarations: [ContactComponent], imports: [SharedModule, FormsModule, i1.RouterModule] }); })();
//# sourceMappingURL=contact.module.js.map