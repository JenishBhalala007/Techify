import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
    },
    { path: '**', redirectTo: '' }
];
export class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=app-routing.module.js.map