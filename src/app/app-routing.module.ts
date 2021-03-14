import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyAttendanceHomeComponent } from './daily-attendance-home/daily-attendance-home.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'sec',
    loadChildren: () =>
    import('./security/security.module').then((m) => m.SecurityModule)
  },
  {
    path: 'maint',
    loadChildren: () =>
      import('./maintenance/maintenance.module').then((m) => m.MaintenanceModule)
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule)
  },
  {
    path: 'daily', component: DailyAttendanceHomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/sec/login', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
