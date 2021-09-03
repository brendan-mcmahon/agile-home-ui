import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  displayType: string = 'backlog';

  constructor(private houseService: HouseService) { }

  showBacklog() {
    this.displayType = 'backlog';
  }

  showCurrentSprint(){
    this.displayType = 'currentSprint';
  }

  ngOnInit(): void {
  }

}
