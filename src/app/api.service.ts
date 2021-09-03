import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { House, Story } from './models/house.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.API_ENDPOINT;

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.baseUrl}house`);
  }

  createHouse(newHouse: House):Observable<House> {
    return this.http.post<House>(`${this.baseUrl}house`, newHouse);
  }

  updateHouse(updatedHouse: House) {
    return this.http.put(`${this.baseUrl}house/${updatedHouse.id}`, updatedHouse);
  }

  deleteHouse(id: number) {
    return this.http.delete(`${this.baseUrl}house/${id}`);
  }

  getHouse(id: number) {
    return this.http.get<House>(`${this.baseUrl}house/${id}`);
  }

  getBacklog(houseId: number): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.baseUrl}story/${houseId}`);
  }

  createBacklogItem(story: Story): Observable<Story> {
    return this.http.post<Story>(`${this.baseUrl}story`, story);
  }

  constructor(private http: HttpClient) { }
}
