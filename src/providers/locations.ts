import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Store } from './store';

@Injectable()
export class LocationStorage {
  locations: any[] = [];
  constructor(public http: Http) {
  }
  setLocation(locations) {
    this.locations = locations;
  }
  getLocation() {
    if(this.locations.length == 0){
      return Store.STORES_JSON;
    }
    return this.locations;
  }
}
