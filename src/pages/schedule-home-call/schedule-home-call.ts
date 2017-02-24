import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewTestPage } from '../view-test/view-test';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TrackCallonMapModal } from '../track-callon-map/track-callon-map';

/*
  Generated class for the ScheduleHomeCall page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule-home-call',
  templateUrl: 'schedule-home-call.html',
  providers: [Storage]
})
export class ScheduleHomeCallPage {
  housecallsList: FirebaseListObservable<any>;
  storage: Storage;
  nohousecall: boolean = true;

  myhousecalls = [];

  constructor(public navCtrl: NavController, storage: Storage, af: AngularFire, public modalCtrl: ModalController) {
    this.housecallsList = af.database.list('/housecalls');
    this.storage = storage;
    this.storage.get("user-appointments").then((val) => {
      if (val != null) {
        this.myhousecalls = JSON.parse(val);
        if (this.myhousecalls.length > 0) {
          this.nohousecall = false;
        }
      }
    });

    console.log(this.nohousecall);
  }

  placehousecall(event) {
    console.log('Called');
    this.navCtrl.push(ViewTestPage);
  }

  deletehousecall(event, item) {


  }

  trackCall(callinitiatedStatus) {
    if (callinitiatedStatus) {
      let profileModal = this.modalCtrl.create(TrackCallonMapModal, { userId: 8675309 });
      profileModal.present();
    }
  }

}
