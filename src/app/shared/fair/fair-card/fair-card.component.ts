import { Component, Input, OnInit } from '@angular/core';
import { IFair, Ilocation } from '../../model/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {

  @Input()
  fairData!: IFair;
  fairCity!: string
  constructor() { }

  ngOnInit(): void {

    // console.log(typeof this.fairData.location);

    if (typeof this.fairData.location === 'object') {

      this.fairCity = this.fairData.location?.city!
    }

  }

}
