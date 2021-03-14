import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { StudentHomeComponent } from './students-home/student-home.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TeacherHomeComponent } from './teachers-home/teacher-home.component';
import { ClassHomeComponent } from './classes-home/class-home.component';
import { ClassesListHomeComponent } from './classes-list-home/classes-list-home.component';
import { ToastModule } from 'primeng/toast';
import { TeachersListHomeComponent } from './teachers-list-home/teachers-list-home.component';
import { StudentsListHomeComponent } from './students-list-home/students-list-home.component';

@NgModule({
  declarations: [
    StudentHomeComponent,
    TeacherHomeComponent,
    ClassHomeComponent,
    ClassesListHomeComponent,
    TeachersListHomeComponent,
    StudentsListHomeComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    SharedModule,
    MDBBootstrapModule,
  ]
})
export class MaintenanceModule { }
