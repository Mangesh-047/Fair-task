import { Injectable } from '@angular/core';
import { IFair } from '../model/fairs';
import { fairsArray } from '../consts/fair';

@Injectable({
  providedIn: 'root'
})
export class FairService {

  fairArray: Array<IFair> = fairsArray;

  constructor() { }

  getAllFair(): Array<IFair> {
    return this.fairArray
  }

  getFair(id: string): IFair {
    return this.fairArray.find(e => e.fairId === id)!
  }
}
