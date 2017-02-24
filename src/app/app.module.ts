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
import {DashboardPage} from '../pages/dashboard/dashboard';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {ViewTestPage} from '../pages/view-test/view-test';
import {BookHouseCallPage} from '../pages/book-house-call/book-house-call';
import {TestDetailPage} from '../pages/test-detail/test-detail';
import {LoginNewPage} from '../pages/login-new/login-new';




import {PatientPage} from '../pages/patient/patient';
import {InsuranceInfoPage} from '../pages/insurance-info/insurance-info';
import {PaymentPage} from '../pages/payment/payment';
import {SharedAccountPage} from '../pages/shared-account/shared-account';
import {NotificationsPage} from '../pages/notifications/notifications';
import {WellnessPage} from '../pages/wellness/wellness';



import { MapWithStorePage } from '../pages/map-with-store/map-with-store';
import { GoogleMaps } from '../providers/google-maps';
import { GoogleMapsCluster } from '../providers/google-maps-cluster';
import { Connectivity } from '../providers/connectivity';
import { ListWithStorePage } from '../pages/list-with-store/list-with-store';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';
import {ScrollableTabs} from '../components/scrollable-tabs/scrollable-tabs';
import { PopoverPage } from '../pages/popover-page/popover-page';
import {LabReportPage} from '../pages/lab-report/lab-report';
import { StoreProvider } from '../providers/store';


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
    ScrollableTabs,
    HealthTipsPage,
    PopoverPage,
    LabReportPage,
    FaqPage,
    ContactUsPage,
    DashboardPage,
    MyProfilePage,
    PatientPage,
    InsuranceInfoPage,
    PaymentPage,
    SharedAccountPage,
    NotificationsPage,
    WellnessPage,
    ViewTestPage,
    BookHouseCallPage,
    TestDetailPage,
    LoginNewPage,
    PdfViewerComponent
  ],
  imports: [

    IonicModule.forRoot(MyApp,{
            tabsPlacement: 'top'
        })
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
    DashboardPage,
    MyProfilePage,
    PatientPage,
    InsuranceInfoPage,
    PaymentPage,
    SharedAccountPage,
    NotificationsPage,
    WellnessPage,
    ViewTestPage,
    BookHouseCallPage,
    TestDetailPage,
    LoginNewPage,
    HealthTipsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GoogleMaps, GoogleMapsCluster, Connectivity, StoreProvider]
})
export class AppModule {}
