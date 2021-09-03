import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HouseService } from '../house.service';
import { Story } from '../models/house.model';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  stories: Story[];
  newStory: Story = new Story();

  constructor(private apiService: ApiService, private houseService: HouseService) { }

  ngOnInit(): void {
    console.log(`opening backlog for ${this.houseService.house.id}`);
    this.apiService.getBacklog(this.houseService.house.id).subscribe(stories => {
      this.stories = stories;
    });
  }

  createItem() {
    this.newStory.houseId = this.houseService.house.id;
    console.log(this.newStory);
    this.apiService.createBacklogItem(this.newStory).subscribe(story => {
      this.stories.push(story);
    });
  }

}
