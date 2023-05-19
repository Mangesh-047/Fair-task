import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavClickDirective } from './shared/directives/nav-click.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './shared/products/products.module';
import { UsersModule } from './shared/users/users.module';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FairModule } from './shared/fair/fair.module';
import { LoginComponent } from './shared/components/login/login.component';
import { MaterialModule } from './shared/material/material.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavClickDirective,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    UsersModule,
    FairModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
