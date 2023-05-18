import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FairService } from '../../services/fair.service';
import { IFair } from '../../model/fairs';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {

  fairId!: string;
  fairObj!: IFair;

  constructor(
    private _route: ActivatedRoute,
    private _fairService: FairService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.fairId = params['fairId']
        // console.log(this.fairId);
        this.fairObj = this._fairService.getFair(this.fairId)
      })
  }

}
