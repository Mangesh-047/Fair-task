import { Component, OnInit } from '@angular/core';
import { FairService } from '../../services/fair.service';
import { IFair } from '../../model/fairs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fairArray!: IFair[]
  constructor(
    private _fairsService: FairService
  ) { }

  ngOnInit(): void {
    this.fairArray = this._fairsService.getAllFair()
  }

}
