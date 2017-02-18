import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { PdfViewerComponent } from 'ng2-pdf-viewer';

/*
  Generated class for the LabReport page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lab-report',
  templateUrl: 'lab-report.html'
})
export class LabReportPage {

  pdfSrc: string = 'assets/HNLResult.pdf';
  page: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabReportPage');
  }

}
