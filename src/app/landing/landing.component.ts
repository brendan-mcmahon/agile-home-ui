import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HouseService } from '../house.service';
import { House } from '../models/house.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  houses: House[] = [];
  newHouse: House= new House();

  constructor(private apiService: ApiService, private houseService: HouseService, private router: Router) {
    this.apiService.getHouses().subscribe(h => this.houses = h);
  }

  createHouse(){
    console.log(this.newHouse);
    this.apiService.createHouse(this.newHouse).subscribe(h => this.houses.push(h));
  }

  setHouse(house: House){
    this.houseService.setHouse(house);
    this.router.navigate(['/house']);
  }

  ngOnInit(): void {

  }

}
