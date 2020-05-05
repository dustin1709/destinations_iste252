import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PutItemsService {
  private cities = [];
  private visited = [];
  private tour: string [];
  private tour_desc: string [];
  constructor() { }
  public addPlaces(city:string) {
    this.cities.push(city);
  }
  public getPlaces() {
    return this.cities;
  }
  public addVisited(city:string) {
    this.visited.push(city);
  }
  public getVisited() {
    return this.visited;
  }
  public setTour(item:string[]) {
    this.tour = item;
  }
  public setTourDesc(item:string[]) {
    this.tour_desc = item;
  }
  public getTour() {
    return this.tour;
  }
  public getTourDesc() {
    return this.tour_desc;
  }
}
