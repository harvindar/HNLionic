import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geofence } from 'ionic-native';

@Component({
  selector: 'page-psc-detail',
  templateUrl: 'psc-detail.html'
})
export class PscDetailPage {
  pscdetail: any = {};
  ImagePath: any = {};
  checkinStatus: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.pscdetail.ImagePath = '';
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // initialize the plugin
      Geofence.initialize().then(
        // resolved promise does not return a value
        () => console.log('Geofence Plugin Ready'),
        (err) => console.log(err)
      )
    })
  }
  ionViewDidEnter() {
    this.pscdetail = this.navParams.data;
    console.log(this.pscdetail);
    console.log(Math.floor(this.pscdetail.durationValue % 3600 / 60));
    if (Math.floor(this.pscdetail.durationValue % 3600 / 60) > 30) {
      this.checkinStatus = true;
    }
  }
  checkin() {
  }
  notifyforCheckin() {
    this.addGeofence(this.pscdetail, 20);
  }
  addGeofence(pscdetail, radius) {
    //options describing geofence
    let fence = {
      id: pscdetail.ClientID, //any unique ID
      latitude: pscdetail.Latitude, //center of geofence radius
      longitude: pscdetail.Longitude,
      radius: radius, //radius to edge of geofence
      transitionType: 1, //see 'Transition Types' below
      notification: { //notification settings
        id: pscdetail.ClientID, //any unique ID
        title: "You are near your store", //notification title
        text: "You just arrived at "+pscdetail.AddressLine, //notification body
        openAppOnClick: true //open app when notification is tapped
      }
    }

    Geofence.addOrUpdate(fence).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
  }
}
