import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import 'rxjs/add/operator/map';
import { Store } from './store';

@Injectable()
export class GoogleMapsCluster {

  markerCluster: any;
  locations: any;

  constructor(public http: Http) {
    console.log('Hello GoogleMapsCluster Provider');

    this.locations = Store.STORES_JSON;
  }

  addCluster(map, markerevents) {

    if (google.maps) {

      //Convert locations into array of markers
      let markers: any = this.locations.map((item) => {
        let marker = new google.maps.Marker({
          position: { lat: item.Latitude, lng: item.Longitude },
          label: item.PSCName
        });
        marker.set('id', item.ClientID)
        return marker;
      });
      console.log(markers);
      /*for (var i = 0; i < markers.length; i++) {
        markers[i].addListener('click', markerevents(markers[i]));
      }*/

      this.markerCluster = new MarkerClusterer(map, markers, { imagePath: 'assets/img/m' });

    } else {
      console.warn('Google maps needs to be loaded before adding a cluster');
    }

  }

}