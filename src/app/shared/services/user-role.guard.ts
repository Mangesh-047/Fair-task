import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserROleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(route.data['userRole']);

    // if (route.data['userRole'] === localStorage.getItem('userRole')) {
    //   return true
    // } else {

    //   return false;
    // }

    let getUserRoleFromStaticData: string = route.data['userRole'];

    let getLoginUserRole = localStorage.getItem('userRole')!

    if (getUserRoleFromStaticData.includes(getLoginUserRole)) {
      return true
    } else {
      return false
    }



  }
}