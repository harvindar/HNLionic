import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,Events,AlertController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { ViewhealthPage } from '../pages/viewhealth/viewhealth';
import { PayyourbillPage } from '../pages/payyourbill/payyourbill';
import { ScheduleHomeCallPage } from '../pages/schedule-home-call/schedule-home-call';
import {HealthTipsPage} from '../pages/health-tips/health-tips';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {FaqPage} from '../pages/faq/faq';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {LoginNewPage} from '../pages/login-new/login-new';



import { MapWithStorePage } from '../pages/map-with-store/map-with-store';
import { ListWithStorePage } from '../pages/list-with-store/list-with-store';
import {LabReportPage} from '../pages/lab-report/lab-report';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginNewPage;

  pages: Array<{ title: string, component: any, menuImage: string, menuselectedImage: string, active: boolean }>;

  constructor(public platform: Platform,private events: Events,public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'My Profile', component: MyProfilePage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'My Lab Results', component: Page3Page, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'PSC Locator', component: MapWithStorePage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: true },
      { title: 'Schedule Home Call', component: ScheduleHomeCallPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
//      { title: 'My Health', component: ViewhealthPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
//      { title: 'Pay Your Bill', component: PayyourbillPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'Health Library', component: HealthTipsPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'Contact Us', component: ContactUsPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false },
      { title: 'FAQ', component: FaqPage, menuImage: 'assets/img/about_gray.png', menuselectedImage: 'assets/img/about.png', active: false }


    ];

    events.subscribe('user:logout', (userEventData) => {
      this.nav.setRoot(LoginNewPage);
    });

    events.subscribe('user:loginerror', (userEventData) => {
      this.showLoginErrorAlert();
    });

    events.subscribe('user:login', (userEventData) => {
      this.nav.setRoot(MapWithStorePage);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {

    this.pages.forEach((item, index, arr) => {
      if (item.component == page.component) {
        item.active = true;
      }
      else {
        item.active = false;
      }
    });

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  showLoginErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error while login, Please check your Usename or Password.',
      buttons: ['OK']
    });
    alert.present();
  }

  logout()
  {
        this.events.publish('user:logout', "User logged out");
  }
}
