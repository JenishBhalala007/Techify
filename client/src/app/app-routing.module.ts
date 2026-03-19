import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
