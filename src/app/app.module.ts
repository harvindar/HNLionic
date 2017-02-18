import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerComponent } from 'ng2-pdf-viewer';


import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { ViewhealthPage } from '../pages/viewhealth/viewhealth';
import { PayyourbillPage } from '../pages/payyourbill/payyourbill';
import { ScheduleHomeCallPage } from '../pages/schedule-home-call/schedule-home-call';
import { PscDetailPage } from '../pages/psc-detail/psc-detail';
import {HealthTipsPage} from '../pages/health-tips/health-tips';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {FaqPage} from '../pages/faq/faq';


import { MapWithStorePage } from '../pages/map-with-store/map-with-store';
import { GoogleMaps } from '../providers/google-maps';
import { GoogleMapsCluster } from '../providers/google-maps-cluster';
import { Connectivity } from '../providers/connectivity';
import { ListWithStorePage } from '../pages/list-with-store/list-with-store';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';
import { PopoverPage } from '../pages/popover-page/popover-page';
import {LabReportPage} from '../pages/lab-report/lab-report';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3Page,
    ViewhealthPage,
    PayyourbillPage,
    ScheduleHomeCallPage,
    PscDetailPage,
    MapWithStorePage,
    ListWithStorePage,
    ParallaxHeader,
    HealthTipsPage,
    PopoverPage,
    LabReportPage,
    FaqPage,
    ContactUsPage,
    PdfViewerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3Page,
    ViewhealthPage,
    PayyourbillPage,
    ScheduleHomeCallPage,
    PscDetailPage,
    MapWithStorePage,
    ListWithStorePage,
    PopoverPage,
    LabReportPage,
    ContactUsPage,
    FaqPage,
    HealthTipsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GoogleMaps, GoogleMapsCluster, Connectivity]
})
export class AppModule {}
