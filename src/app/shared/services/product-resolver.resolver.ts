import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<Iproduct> {

  constructor(private _productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> {
    let prodId = +route.params['id']
    // console.log(prodId);
    let obj: Iproduct = this._productsService.getProduct(prodId)
    // console.log(obj);

    return of(obj)
  }
}
