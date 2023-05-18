import { Component, OnInit } from '@angular/core';
import { FairService } from '../../services/fair.service';
import { IFair } from '../../model/fairs';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {

  fairArray!: Array<IFair>

  constructor(
    private _fairService: FairService
  ) { }

  ngOnInit(): void {
    this.fairArray = this._fairService.getAllFair()
  }

}
