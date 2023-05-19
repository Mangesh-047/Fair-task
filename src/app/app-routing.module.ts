import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairDashboardComponent } from './shared/fair/fair-dashboard/fair-dashboard.component';
import { FairDetailsComponent } from './shared/fair/fair-details/fair-details.component';
import { ProductsComponent } from './shared/products/products/products.component';
import { ProductComponent } from './shared/products/products/product/product.component';
import { EditProductComponent } from './shared/products/products/edit-product/edit-product.component';
import { UsersComponent } from './shared/users/users/users.component';
import { UserComponent } from './shared/users/users/user/user.component';
import { EditUserComponent } from './shared/users/users/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'fairs', component: FairDashboardComponent },
  { path: 'fairs/:fairId', component: FairDashboardComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: EditProductComponent }
    ]
  },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/edit', component: EditUserComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
