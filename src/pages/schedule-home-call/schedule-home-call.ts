import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage}from '@ionic/storage';

import {ViewTestPage} from '../view-test/view-test';
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

  storage: Storage;

myhousecalls = [];

  constructor(public navCtrl: NavController, storage: Storage) {
  
this.storage = storage;
this.storage.get("user-appointments").then((val) => {
    if(val != null) {
        this.myhousecalls = JSON.parse(val);  
        }
    });
}
  
placehousecall(event) {
console.log('Called');
 this.navCtrl.push(ViewTestPage);
}

deletehousecall(event, item) {


}

}
