import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairModule } from './shared/fair/fair.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { } from './shared/components/pipes/location.pipe';
import { NavClickDirective } from './shared/directives/nav-click.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './shared/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavClickDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FairModule,
    BrowserAnimationsModule,
    ProductsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
