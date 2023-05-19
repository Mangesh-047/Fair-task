import { Injectable } from '@angular/core';
import { Iproduct, pstatus } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsArray: Array<Iproduct> = [
    {
      pname: 'Samsung M21',
      id: 1,
      pstatus: pstatus.inp,
      canReturn: 1
    },
    {
      pname: 'Iphone 13',
      id: 2,
      pstatus: pstatus.dis,
      canReturn: 0
    },
    {
      pname: 'Vivo',
      id: 3,
      pstatus: pstatus.del,
      canReturn: 1
    },
    {
      pname: 'Sony',
      id: 4,
      pstatus: pstatus.inp,
      canReturn: 0
    },
  ]
  constructor() { }

  getAllProducts(): Array<Iproduct> {
    return this.productsArray
  }

  getProduct(id: number): Iproduct {
    return this.productsArray.find(e => e.id === id)!
  }

  updateProduct(obj: Iproduct): void {
    this.productsArray.forEach(e => {
      if (e.id === obj.id) {
        e.pname = obj.pname
        e.pstatus = obj.pstatus
      }
    })
  }
}
