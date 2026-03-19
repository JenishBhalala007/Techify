import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    ToastComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    ToastComponent,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {}
