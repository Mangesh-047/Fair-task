import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  prodId!: number;
  prodObj!: Iproduct;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.prodId = +params['id']

        // console.log(this.prodId);
        this.prodObj = this._productsService.getProduct(this.prodId)
      })
  }

  onEditProduct() {

    this._router.navigate(['/products', this.prodId, 'edit'], {
      queryParamsHandling: 'preserve'
    }
    )
  }

}
