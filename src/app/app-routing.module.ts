import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairDashboardComponent } from './shared/fair/fair-dashboard/fair-dashboard.component';
import { FairDetailsComponent } from './shared/fair/fair-details/fair-details.component';

const routes: Routes = [
  { path: 'fairs', component: FairDashboardComponent },
  { path: 'fairs/:fairId', component: FairDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
