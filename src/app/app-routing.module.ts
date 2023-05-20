import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairDashboardComponent } from './shared/fair/fair-dashboard/fair-dashboard.component';
import { ProductsComponent } from './shared/products/products/products.component';
import { ProductComponent } from './shared/products/products/product/product.component';
import { EditProductComponent } from './shared/products/products/edit-product/edit-product.component';
import { UsersComponent } from './shared/users/users/users.component';
import { UserComponent } from './shared/users/users/user/user.component';
import { EditUserComponent } from './shared/users/users/edit-user/edit-user.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserROleGuard } from './shared/services/user-role.guard';
import { ProductResolverResolver } from './shared/services/product-resolver.resolver';
import { ProductDeactivateGuard } from './shared/services/product-deactivate.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  {
    path: 'fairs', component: FairDashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'fairs/:fairId', component: FairDashboardComponent },
  {
    path: 'products', component: ProductsComponent,
    data: {
      userRole: 'ADMIN'
    },
    canActivate: [UserROleGuard],

    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],

    children: [
      {
        path: ':id', component: ProductComponent,
        resolve: { product: ProductResolverResolver }
      },
      {
        path: ':id/edit', component: EditProductComponent,
        canDeactivate: [ProductDeactivateGuard]
      }
    ]
  },
  {
    path: 'users', component: UsersComponent,
    canActivate: [UserROleGuard],
    data: {
      userRole: 'ADMIN'
    },

    canActivateChild: [AuthGuard],

    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/edit', component: EditUserComponent }
    ]
  },
  {
    path: 'page-not-found',
    data: { errorMsg: 'Oops.. page Not Found' },
    component: PageNotFoundComponent
  },
  { path: '**', redirectTo: 'page-not-found' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
