import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import {Page1} from '../page1/page1';

import {LoginNewPage} from '../login-new/login-new';


@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})


export class DemoPage {

  data: Array<{title: string, description: string, image: string}> = [];

  constructor(public navCtrl: NavController) {
this.data.push({
      title: "Welcome to Health Network Laboratories!",
      description: "The <b>Health Network Laboratories (HNL)</b> offers advanced laboratory diagnostic testing at convenient testing locations.",
      image: "assets/img/ica-slidebox-img-1.png",
    });

    this.data.push( {
      title: "Track you fitness",
      description: "Health is wealth, keep track of your fitness stats with us.",
      image: "assets/img/ica-slidebox-img-2.png",
    });
    this.data.push({
      title: "View Your Test Results",
      description: "You can get your test results, as soon as they're available",
      image: "assets/img/ica-slidebox-img-2.png",
    });
    this.data.push({
      title: "Schedule House Call",
      description: "Get blood work done in comfort of your own home.",
      image: "assets/img/ica-slidebox-img-3.png",
    });
    this.data.push({
      title: "Test center's Location",
      description: "Find Test center's near you and book an Appointment easily.",
      image: "assets/img/ica-slidebox-img-3.png",
    });


  }

navigatetohome(event) {
this.navCtrl.setRoot(Page1);

}


}
