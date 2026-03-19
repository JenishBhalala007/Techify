import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent }
];

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class AuthModule {}
