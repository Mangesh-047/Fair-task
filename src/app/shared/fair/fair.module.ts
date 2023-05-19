import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FairDashboardComponent } from './fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './fair-card/fair-card.component';
import { FairDetailsComponent } from './fair-details/fair-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent
  ]
})
export class FairModule { }
