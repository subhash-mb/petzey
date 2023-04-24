import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppiontmentsRoutingModule } from './appiontments-routing.module';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';


@NgModule({
  declarations: [
    AppointmentHistoryComponent
  ],
  imports: [
    CommonModule,
    AppiontmentsRoutingModule,
  
  ]
})
export class AppiontmentsModule { }
