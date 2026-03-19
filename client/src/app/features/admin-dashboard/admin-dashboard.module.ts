import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [{ path: '', component: AdminDashboardComponent }];

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class AdminDashboardModule {}
