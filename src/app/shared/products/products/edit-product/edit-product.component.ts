import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp, Iproduct, pstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, IcanDeactivateComp {

  prodId!: number;
  prodObj!: Iproduct;
  canEdit!: number


  @ViewChild("pname")
  pname!: ElementRef<HTMLInputElement>


  @ViewChild("pstatus")
  pstatus!: ElementRef<HTMLSelectElement>

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService,
  ) { }


  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {

    if (this.prodObj.pname !== this.pname.nativeElement.value || this.prodObj.pstatus !== this.pstatus.nativeElement.value) {
      return confirm('Are you sure, you want to Discard these changes')

    }
    else {
      return true
    }
  }







  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.prodId = +params['id']
      })

    console.log(this.pname);

    this.prodObj = this._productsService.getProduct(this.prodId)

    this._route.queryParams
      .subscribe((params: Params) => {

        // console.log(+params['canEdit']);
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


