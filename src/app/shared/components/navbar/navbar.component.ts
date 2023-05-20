import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userRole: string = 'ADMIN'
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.userRole);

  }


  onLogOut(eve: Event) {
    this._authService.logOutToApp()

    // console.log(eve.target);
    let ele = eve.target as HTMLFormElement

    ele.closest('div')?.classList.remove('show')
    // console.log(ele.closest('div'));

  }

}
