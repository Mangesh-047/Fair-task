import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArray!: Iuser[]
  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersArray = this._usersService.getAllUsers()
  }

}
