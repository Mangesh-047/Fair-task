import { Component, OnInit } from '@angular/core';
import { FairService } from '../../services/fair.service';
import { IFair } from '../../model/fairs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../material/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fairArray!: IFair[]
  constructor(
    private _fairsService: FairService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fairArray = this._fairsService.getAllFair()
  }



}