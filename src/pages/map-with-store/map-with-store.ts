import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform,PopoverController } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';
import { GoogleMapsCluster } from '../../providers/google-maps-cluster';
import { ListWithStorePage } from '../list-with-store/list-with-store';
import { PscDetailPage } from '../psc-detail/psc-detail';
import {PopoverPage} from '../popover-page/popover-page';


@Component({
  selector: 'page-map-with-store',
  templateUrl: 'map-with-store.html'
})
export class MapWithStorePage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  map: any;
  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController, public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {

  }

  ionViewDidLoad(): void {

    this.platform.ready().then(() => {
      console.log('loading map');
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
       // this.map = map;
        this.mapCluster.addCluster(map, (marker) => {
          var selectedmarker:any = marker;
          console.log(selectedmarker.get('id'));
          this.navCtrl.push(PscDetailPage)
        });
      });

    });

  }

  ionViewDidEnter() {

  }
  tolistwithStores() {
    this.navCtrl.setRoot(ListWithStorePage);
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage,{
    });

    popover.present({
      ev: ev
    });
  }

}
