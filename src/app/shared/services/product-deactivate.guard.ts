import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDeactivateGuard implements CanDeactivate<IcanDeactivateComp> {
  canDeactivate(
    component: IcanDeactivateComp,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate()
  }

}
