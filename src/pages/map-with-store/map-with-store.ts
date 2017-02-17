import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, PopoverController } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';
import { GoogleMapsCluster } from '../../providers/google-maps-cluster';
import { ListWithStorePage } from '../list-with-store/list-with-store';
import { PscDetailPage } from '../psc-detail/psc-detail';
import { PopoverPage } from '../popover-page/popover-page';
import { Store } from '../../providers/store';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'page-map-with-store',
  templateUrl: 'map-with-store.html'
})
export class MapWithStorePage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  map: any;
  markerCluster: any;
  locations: any;
  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController, public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {
    this.locations = Store.STORES_JSON;
  }

  ionViewDidLoad(): void {

    this.platform.ready().then(() => {
      console.log('loading map');
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
        // this.map = map;
        this.addCluster(map);
      });

    });

  }

  ionViewDidEnter() {

  }
  tolistwithStores() {
    this.navCtrl.setRoot(ListWithStorePage);
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
    });

    popover.present({
      ev: ev
    });
  }
  addCluster(map) {

    if (google.maps) {

      //Convert locations into array of markers
      let markers: any = this.locations.map((item) => {
        let marker = new google.maps.Marker({
          position: { lat: item.Latitude, lng: item.Longitude },
          label: item.PSCName,
          map: map
        });
        marker.set('id', item.ClientID);
        this.attachmyEvents(marker);
        return marker;
      });

      /*for (var i = 0; i < markers.length; i++) {
        console.log(markers[i]);
        google.maps.event.addListener(markers[i], 'click', (event) => {
          console.log(event);
          //this.events.publish('markerclicked',markers[i].get('id'));  
        });
      }*/

      this.markerCluster = new MarkerClusterer(map, markers, { imagePath: 'assets/img/m' });

    } else {
      console.warn('Google maps needs to be loaded before adding a cluster');
    }

  }

  attachmyEvents(marker) {
    marker.addListener('click',  () => {
     console.log(marker.get('id'));
     let selected_marker = this.locations.filter((item) => {
       return item.ClientID == marker.get('id');
     });
     this.navCtrl.push(PscDetailPage,selected_marker[0])
    });
  }
}
