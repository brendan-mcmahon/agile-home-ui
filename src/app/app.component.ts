import { Component } from '@angular/core';
import { HouseService } from './house.service';
import { House } from './models/house.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agile-home';
  house: House;

  constructor(private houseService: HouseService){
    this.houseService.houseUpdate$.subscribe(h => this.house = h );
  }
}
