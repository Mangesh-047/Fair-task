import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  msg!: string;
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe((e) => {
      // console.log(e);
      this.msg = e['errorMsg']
    })

    // this.msg = this._route.snapshot.data['errorMsg']
    // console.log(this._route.snapshot.data['errorMsg'])
  }

}
