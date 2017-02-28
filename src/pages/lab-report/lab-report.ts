import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { SocialSharing } from 'ionic-native';


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


  shareonemail (event) {
SocialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
  let files = ['assets/HNLResult.pdf'] ;
  SocialSharing.shareViaEmail('My Lab Result', 'My Lab Reult',['email@server.com']) .then(() => {
  // Success!
  console.log("Email Success");
}).catch(() => {
  console.log("Email Share is not working");
});
}).catch(() => {
  console.log("Email Share is disable");

});

}

}
