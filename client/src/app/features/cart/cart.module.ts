import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: CartViewComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  declarations: [CartViewComponent, CheckoutComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class CartModule {}
