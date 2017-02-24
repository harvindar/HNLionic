import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';

@Component({
  selector: 'page-track-callon-map',
  templateUrl: 'track-callon-map.html'
})
export class TrackCallonMapModal {
  map: any;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  constructor(public viewCtrl: ViewController, public maps: GoogleMaps, public navParams: NavParams, public platform: Platform) {
    this.platform.ready().then(() => {
      console.log('loading map');
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
        this.map = map;
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
