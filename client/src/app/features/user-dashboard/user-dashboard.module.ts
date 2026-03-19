import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [{ path: '', component: UserDashboardComponent }];

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class UserDashboardModule {}
