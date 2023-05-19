import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  inputType: string = 'password'
  alreadyHaveAccount: boolean = true

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin(email: HTMLInputElement, pass: HTMLInputElement) {

    this._authService.loginToApp(email.value, pass.value)
  }

  onPassShow() {
    // console.log(eve.target);

    // if (this.inputType === 'password') {
    //   this.inputType = 'text'
    // } else {
    //   this.inputType = 'password'
    // }

    this.inputType === 'password' ? this.inputType = 'text' : this.inputType = 'password'
  }


}
