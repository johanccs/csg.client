import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DailyHomeComponent } from './daily-home/daily-home.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ByTermHomeComponent } from './byTerm-home/byTerm-home.component';


@NgModule({
  declarations: [DailyHomeComponent, ByTermHomeComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    MDBBootstrapModule,
  ]
})
export class ReportsModule { }
