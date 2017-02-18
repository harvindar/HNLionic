import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LabReportPage} from '../lab-report/lab-report';

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  reports: Array<{ title: string, date: string, filePath: string }>;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.reports = [
      { title: 'Report One', date: "2017-02-12", filePath: 'assets/labReport.pdf' },
      { title: 'Report Two', date: "2017-01-10", filePath: 'assets/labReport.pdf' },
      { title: 'Report Three', date: "2016-12-12", filePath: 'assets/labReport.pdf' },
      { title: 'Report Four', date: "2016-06-10", filePath: 'assets/labReport.pdf' }
    ];



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  itemSelected(report :any)
  {
        this.navCtrl.push(LabReportPage, report);
  }

}
