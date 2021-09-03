import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog/backlog.component';
import { HouseComponent } from './house/house.component';
import { LandingComponent } from './landing/landing.component';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'house', component: HouseComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'sprint', component: SprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
