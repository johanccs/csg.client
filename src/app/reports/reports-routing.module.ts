import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByTermHomeComponent } from './byTerm-home/byTerm-home.component';
import { DailyHomeComponent } from './daily-home/daily-home.component';


const routes: Routes = [
  { path: 'daily', component: DailyHomeComponent },
  { path: 'byTerm', component: ByTermHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
