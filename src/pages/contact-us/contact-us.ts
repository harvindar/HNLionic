import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppVersion} from 'ionic-native';

/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsPage {

  appversion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  onPageLoaded() {
    AppVersion.getVersionNumber().then(res => {
      this.appversion = res;
    });
  }
}
