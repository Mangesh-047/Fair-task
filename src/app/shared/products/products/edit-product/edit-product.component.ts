import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct, pstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  prodId!: number;
  prodObj!: Iproduct;
  canEdit!: number
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.prodId = +params['id']
      })


    this.prodObj = this._productsService.getProduct(this.prodId)

    this._route.queryParams
      .subscribe((params: Params) => {

        console.log(+params['canEdit']);
        this.canEdit = +params['canEdit']
        // this.canEdit = +params['canEdit']
        // console.log(this.canEdit, 'canedit');

      })
  }

  onUpdate(pn: HTMLInputElement, status: HTMLSelectElement) {

    let obj: Iproduct = {
      pname: pn.value,
      id: this.prodId,
      pstatus: <pstatus>status.value,
      canReturn: this.prodObj.canReturn
    }

    this._productsService.updateProduct(obj)

    this._router.navigate(['/products', this.prodId],
      {
        queryParamsHandling: 'preserve'
      })
  }
}
