import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-psc-detail',
  templateUrl: 'psc-detail.html'
})
export class PscDetailPage {
  pscdetail: any = {};
  ImagePath: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pscdetail.ImagePath = '';
  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    this.pscdetail = this.navParams.data;
  }

  call(number) {
    (<any>window).location = 'tell:' + number;
  }
}
