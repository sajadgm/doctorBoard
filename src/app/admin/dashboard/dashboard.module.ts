import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddDoctorFormComponent } from './container/add-doctor-form/add-doctor-form.component';
import { AddClientFormComponent } from './container/add-client-form/add-client-form.component';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { ClientListComponent } from './presentation/client-list/client-list.component';


@NgModule({
  declarations: [
    AddDoctorFormComponent,
    AddClientFormComponent,
    DashboardContainerComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
