import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
