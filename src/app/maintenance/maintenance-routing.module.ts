import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassHomeComponent } from './classes-home/class-home.component';
import { ClassesListHomeComponent } from './classes-list-home/classes-list-home.component';
import { StudentHomeComponent } from './students-home/student-home.component';
import { StudentsListHomeComponent } from './students-list-home/students-list-home.component';
import { TeacherHomeComponent } from './teachers-home/teacher-home.component';
import { TeachersListHomeComponent } from './teachers-list-home/teachers-list-home.component';


const routes: Routes = [
  { path: 'student', component: StudentHomeComponent },
  { path: 'teacher', component: TeacherHomeComponent },
  { path: 'class', component: ClassHomeComponent },
  { path: 'class-list', component: ClassesListHomeComponent },
  { path: 'students-list', component: StudentsListHomeComponent },
  { path: 'teachers-list', component: TeachersListHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
