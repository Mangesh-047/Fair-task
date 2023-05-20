import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductResolverResolver } from 'src/app/shared/services/product-resolver.resolver';
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
    // private _productsService: ProductsService,
  ) {

    this._route.data
      .subscribe((res) => {
        // console.log(res['product']);
        this.prodObj = res['product']
      })

  }

  ngOnInit(): void {
    // this._route.params
    //   .subscribe((params: Params) => {
    //     this.prodId = +params['id']

    //     // console.log(this.prodId);
    //     this.prodObj = this._productsService.getProduct(this.prodId)
    //   })
  }

  onEditProduct() {

    this._router.navigate(['edit'], {
      queryParamsHandling: 'preserve',
      relativeTo: this._route
    }
    )
  }

}
