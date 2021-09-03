import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { House } from './models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  house: House = new House();
  houseUpdate$ = new BehaviorSubject<House>(this.house);

  setHouse(house: House) {
    this.house = house;
    this.houseUpdate$.next(this.house);
  }

  constructor() { }
}
