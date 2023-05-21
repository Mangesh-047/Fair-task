import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Params, Router } from '@angular/router';
import { IcanDeactivateComp } from 'src/app/shared/model/products';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId!: number
  userObj!: Iuser
  userRole!: number
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _usersService: UsersService
  ) { }



  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        // console.log(+params['id']);
        this.userId = +params['id']
      })

    this.userObj = this._usersService.getUser(this.userId)

    this._route.queryParams
      .subscribe((params) => {
        this.userRole = +params['userRole']
        console.log(this.userRole);

      })
  }

  onUpdateUser(uname: HTMLInputElement): void {

    let obj: Iuser = {
      name: uname.value,
      id: this.userId,
      userRole: this.userRole
    }

    this._usersService.updateUser(obj)

    this._router.navigate(['users', this.userId],
      {
        queryParamsHandling: 'preserve'
      })
  }

}
