import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId!: number
  userObj!: Iuser
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((parmas: Params) => {
        this.userId = +parmas['id']
        // console.log(this.userId);
        this.userObj = this._usersService.getUser(this.userId)

      })
  }

  onEditUser(): void {
    this._router.navigate(['users', this.userId, 'edit'], {
      queryParamsHandling: 'preserve'
    })
  }

}
