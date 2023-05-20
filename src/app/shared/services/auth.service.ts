import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLogin: boolean = false

  constructor(
    private _router: Router,
    private _snackbarService: SnackbarService
  ) { }


  isAuthenticated(): Promise<boolean> {
    return new Promise((res, rej) => {
      this.isUserLogin = Boolean(localStorage.getItem('token')) ?? false
      res(this.isUserLogin);
    })
  }


  loginToApp(email: string, pass: string) {

    if (email === 'jhon@gmail.com' && pass === "zaq1ZAQ!") {
      this._snackbarService.snackbarOpen(`Login Successfully`, 1000)
      this.isUserLogin = true

      localStorage.setItem('userRole', 'CAN')
      localStorage.setItem('token', 'JWT TOKEN')

      this._router.navigate(['/home'])
    } else if (email === 'jen@gmail.com' && pass === "zaq1ZAQ!") {
      this._snackbarService.snackbarOpen(`Login Successfully`, 1000)
      this.isUserLogin = true

      localStorage.setItem('userRole', 'ADMIN')
      localStorage.setItem('token', 'JWT TOKEN')

      this._router.navigate(['/home'])
    } else if ((email.length && pass.length) <= 0) {
      this._snackbarService.snackbarOpen(`please enter email and password....!!!`)
    } else {
      this._snackbarService.snackbarOpen(`....Invaild Email and Password`)
      setTimeout(() => {
        this._snackbarService.snackbarOpen(`EMAIL: jen@gmail.com , PASSWORD: zaq1ZAQ!`)

      }, 2000);

    }


  }

  logOutToApp() {
    this._snackbarService.snackbarOpen(`Log out......`, 1000)
    localStorage.clear()
    this._router.navigate(['/'])
    this.isUserLogin = false

  }
}
