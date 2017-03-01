import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreProvider {
  stores: any[];
  constructor() {
    this.stores = [{"ClientID":9995,"ClientCode":"C6461","PSCName":"HNL Southside","AddressLine":"2268 South 12th Street","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Allentown","State":"PA","ZipCode":"18103","Phone":"(610) 424-2211","Fax":"(610) 424-2000","BussinessHours":"  Monday: 7:00 a.m. to 5:00 p.m.  Tuesday: 7:00 a.m. to 5:00 p.m.  Wednesday: Closed<span class=\"today\">  Thursday: Closed</span>  Friday: Closed  Saturday: Closed  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_reading.jpg","Distance":-1,"Latitude":40.571,"Longitude":-75.4741,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":4771,"durationValue":583,"totalwaittime":"105"},{"ClientID":3680,"ClientCode":"C2459","PSCName":"HNL PSC Cedar Crest Boulevard","AddressLine":"1251 South Cedar Crest Boulevard","AddressLine2":"Ste. 103C","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Allentown","State":"PA","ZipCode":"18103","Phone":"(610) 434-5577","Fax":"(610) 434-9245","BussinessHours":"  Monday: 7:00 a.m. to 5:30 p.m.  Tuesday: 7:00 a.m. to 5:30 p.m.  Wednesday: 7:00 a.m. to 5:30 p.m.<span class=\"today\">  Thursday: 7:00 a.m. to 5:30 p.m.</span>  Friday: 7:00 a.m. to 5:30 p.m.  Saturday: 7:00 a.m. to 12:00 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_1251.jpg","Distance":-1,"Latitude":40.5658,"Longitude":-75.517,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":8184,"durationValue":912,"totalwaittime":"155"},{"ClientID":6108,"ClientCode":"C4950","PSCName":"HNL PSC Hausman Road","AddressLine":"798 Hausman Road","AddressLine2":"Ste. 150A","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Allentown","State":"PA","ZipCode":"18104","Phone":"(610) 366-1023","Fax":"(610) 366-1089","BussinessHours":"  Monday: 8:00 a.m. to 4:00 p.m.  Tuesday: 8:00 a.m. to 4:00 p.m.  Wednesday: 8:00 a.m. to 4:00 p.m.<span class=\"today\">  Thursday: 8:00 a.m. to 4:00 p.m.</span>  Friday: 8:00 a.m. to 4:00 p.m.  Saturday: Closed  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_HausmanRd.jpg","Distance":-1,"Latitude":40.5928,"Longitude":-75.5634,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":12605,"durationValue":918,"totalwaittime":"155"},{"ClientID":7144,"ClientCode":"C6114","PSCName":"HNL PSC Health Center at Fogelsville","AddressLine":"1431 Nursery St.","AddressLine2":"","AddressLine3":null,"County":"Lehigh","Country":null,"City":"Fogelsville","State":"PA","ZipCode":"18051-1612","Phone":"(610) 841-7797","Fax":"(610) 841-7815","BussinessHours":"  Monday: 6:00 a.m. to 5:00 p.m.  Tuesday: 6:00 a.m. to 5:00 p.m.  Wednesday: 6:00 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 6:00 a.m. to 5:00 p.m.</span>  Friday: 6:00 a.m. to 5:00 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: 7:00 a.m. to 11:00 a.m.","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_fogelsville.jpg","Distance":-1,"Latitude":40.584315,"Longitude":-75.632661,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":17118,"durationValue":1047,"totalwaittime":"175"},{"ClientID":6831,"ClientCode":"C5776","PSCName":"HNL PSC Allentown Towne Center (TILGHMAN)","AddressLine":"4727 Tilghman Street","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Allentown","State":"PA","ZipCode":"18104","Phone":"(610) 841-3770","Fax":"(610) 841-3789","BussinessHours":"  Monday: 6:00 a.m. to 6:00 p.m.  Tuesday: 6:00 a.m. to 6:00 p.m.  Wednesday: 6:00 a.m. to 6:00 p.m.<span class=\"today\">  Thursday: 6:00 a.m. to 6:00 p.m.</span>  Friday: 6:00 a.m. to 6:00 p.m.  Saturday: Closed  Sunday: 7:00 a.m. to 11:00 a.m.","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_AllentownTilghman.jpg","Distance":-1,"Latitude":40.5896,"Longitude":-75.5625,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":12264,"durationValue":838,"totalwaittime":"145"},{"ClientID":2078,"ClientCode":"C1018","PSCName":"HNL PSC Trexlertown","AddressLine":"6900 Hamilton Boulevard","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Trexlertown","State":"PA","ZipCode":"18087","Phone":"(610) 402-0150","Fax":"(610) 402-7163","BussinessHours":"  Monday: 6:30 a.m. to 5:00 p.m.  Tuesday: 6:30 a.m. to 5:00 p.m.  Wednesday: 6:30 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 5:00 p.m.</span>  Friday: 6:30 a.m. to 5:00 p.m.  Saturday: 6:30 a.m. to 2:30 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_trexlertown.jpg","Distance":-1,"Latitude":40.5506,"Longitude":-75.5909,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":13953,"durationValue":1312,"totalwaittime":"225"},{"ClientID":6321,"ClientCode":"C5144","PSCName":"HNL PSC Saucon Valley","AddressLine":"3800 Sierra Circle","AddressLine2":"Ste. 110","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Center Valley","State":"PA","ZipCode":"18034","Phone":"(484) 788-0394","Fax":"(484) 788-0396","BussinessHours":"  Monday: 6:30 a.m. to 4:30 p.m.  Tuesday: 6:30 a.m. to 4:30 p.m.  Wednesday: 6:30 a.m. to 4:30 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 4:30 p.m.</span>  Friday: 6:30 a.m. to 4:30 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_CenterSauconValley.jpg","Distance":-1,"Latitude":40.5506,"Longitude":-75.4261,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":9155,"durationValue":966,"totalwaittime":"165"},{"ClientID":6756,"ClientCode":"C5691","PSCName":"HNL PSC Schnecksville","AddressLine":"5040 Pennsylvania 873","AddressLine2":"Ste. F","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Schnecksville","State":"PA","ZipCode":"18078","Phone":"(610) 799-0146","Fax":"(610) 799-0148","BussinessHours":"  Monday: 6:30 a.m. to 4:00 p.m.  Tuesday: 6:30 a.m. to 4:00 p.m.  Wednesday: 6:30 a.m. to 4:00 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 4:00 p.m.</span>  Friday: 6:30 a.m. to 4:00 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_Schnecksville.jpg","Distance":-1,"Latitude":40.678,"Longitude":-75.6155,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"5","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":17016,"durationValue":1393,"totalwaittime":"235"},{"ClientID":6356,"ClientCode":"C5180","PSCName":"HNL PSC Crest Plaza","AddressLine":"1630 North Cedar Crest Boulevard","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Allentown","State":"PA","ZipCode":"18104","Phone":"(484) 664-7291","Fax":"(484) 664-7293","BussinessHours":"  Monday: 6:30 a.m. to 8:00 p.m.  Tuesday: 6:30 a.m. to 8:00 p.m.  Wednesday: 6:30 a.m. to 8:00 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 8:00 p.m.</span>  Friday: 6:30 a.m. to 8:00 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_atowncrestplaza.jpg","Distance":-1,"Latitude":40.6139,"Longitude":-75.5331,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":7906,"durationValue":657,"totalwaittime":"1110"},{"ClientID":6324,"ClientCode":"C5147","PSCName":"HNL PSC Crossroads of Nazareth","AddressLine":"3465 Nazareth Road","AddressLine2":"Ste. 101","AddressLine3":null,"County":"Northampton County","Country":null,"City":"Easton","State":"PA","ZipCode":"18045","Phone":"(610) 559-1501","Fax":"(610) 559-9122","BussinessHours":"  Monday: 6:30 a.m. to 4:30 p.m.  Tuesday: 6:30 a.m. to 4:30 p.m.  Wednesday: 6:30 a.m. to 4:30 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 4:30 p.m.</span>  Friday: 6:30 a.m. to 4:30 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/57cd9bcf-b079-4683-afdc-db3a03164b0e_psc_eastonnorthwood2011.jpg","Distance":-1,"Latitude":40.7062,"Longitude":-75.2747,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":26946,"durationValue":1476,"totalwaittime":"2510"},{"ClientID":2079,"ClientCode":"C1019","PSCName":"HNL PSC Laurys Station","AddressLine":"5649 Wynnewood Drive","AddressLine2":"Ste. 204","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Laurys Station","State":"PA","ZipCode":"18059","Phone":"(610) 262-7714","Fax":"(610) 262-3968","BussinessHours":"  Monday: 6:00 a.m. to 5:00 p.m.  Tuesday: 6:00 a.m. to 5:00 p.m.  Wednesday: 6:00 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 6:00 a.m. to 5:00 p.m.</span>  Friday: 6:00 a.m. to 5:00 p.m.  Saturday: 8:00 a.m. to 12:00 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_laurystation.jpg","Distance":-1,"Latitude":40.7277,"Longitude":-75.5346,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":15165,"durationValue":1215,"totalwaittime":"2010"},{"ClientID":6991,"ClientCode":"C5963","PSCName":"HNL PSC West Broad Street","AddressLine":"529 West Broad Street","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Bethlehem","State":"PA","ZipCode":"18018","Phone":"(610) 625-2606","Fax":"(610) 625-2683","BussinessHours":"  Monday: 6:30 a.m. to 5:00 p.m.  Tuesday: 6:30 a.m. to 5:00 p.m.  Wednesday: 6:30 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 5:00 p.m.</span>  Friday: 6:30 a.m. to 5:00 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: 7:00 a.m. to 11:00 a.m.","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_WestBroadBeth.jpg","Distance":-1,"Latitude":40.6222,"Longitude":-75.3908,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":13583,"durationValue":898,"totalwaittime":"1510"},{"ClientID":4936,"ClientCode":"C3667","PSCName":"HNL PSC Quakertown","AddressLine":"127 South 5th Street","AddressLine2":"The Atrium","AddressLine3":null,"County":"Bucks County","Country":null,"City":"Quakertown","State":"PA","ZipCode":"18951","Phone":"(215) 538-8505","Fax":"(215) 538-8645","BussinessHours":"  Monday: 7:00 a.m. to 5:00 p.m.  Tuesday: 7:00 a.m. to 5:00 p.m.  Wednesday: 7:00 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 7:00 a.m. to 5:00 p.m.</span>  Friday: 7:00 a.m. to 5:00 p.m.  Saturday: 8:00 a.m. to 12:00 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_quakertown.jpg","Distance":-1,"Latitude":40.4394,"Longitude":-75.3404,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":24219,"durationValue":1950,"totalwaittime":"3310"},{"ClientID":2073,"ClientCode":"C1013","PSCName":"HNL PSC Allentown Medical Center","AddressLine":"500 North 7th Street","AddressLine2":"Ste. 108","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Allentown","State":"PA","ZipCode":"18102","Phone":"(610) 969-2790","Fax":"(610) 969-3085","BussinessHours":"  Monday: 7:00 a.m. to 5:00 p.m.  Tuesday: 7:00 a.m. to 5:00 p.m.  Wednesday: 7:00 a.m. to 7:00 p.m.<span class=\"today\">  Thursday: 7:00 a.m. to 7:00 p.m.</span>  Friday: 7:00 a.m. to 7:00 p.m.  Saturday: Closed  Sunday: 10:00 a.m. to 2:00 p.m.","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_amc.jpg","Distance":-1,"Latitude":40.6092,"Longitude":-75.475,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":0,"durationValue":0,"totalwaittime":"010"},{"ClientID":3784,"ClientCode":"C2549","PSCName":"HNL PSC Health Center at Bethlehem Twsp.","AddressLine":"2101 Emrick Boulevard","AddressLine2":"The Health Center at Bethlehem Township","AddressLine3":null,"County":"Northampton County","Country":null,"City":"Bethlehem","State":"PA","ZipCode":"18020","Phone":"(610) 861-9000","Fax":"(610) 861-9007","BussinessHours":"  Monday: 6:30 a.m. to 5:00 p.m.  Tuesday: 6:30 a.m. to 5:00 p.m.  Wednesday: 6:30 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 5:00 p.m.</span>  Friday: 6:30 a.m. to 5:00 p.m.  Saturday: 7:00 a.m. to 12:00 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_bethlehemtownship.jpg","Distance":-1,"Latitude":40.6516,"Longitude":-75.292,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"closed","CompanyHolidayResponse":null,"distanceValue":23862,"durationValue":1273,"totalwaittime":"2110"},{"ClientID":2205,"ClientCode":"C1136","PSCName":"HNL PSC Hellertown","AddressLine":"708 Main Street","AddressLine2":"Ste.100","AddressLine3":null,"County":"Northampton County","Country":null,"City":"Hellertown","State":"PA","ZipCode":"18055","Phone":"(610) 748-8812","Fax":"(610) 748-8814","BussinessHours":"  Monday: 6:30 a.m. to 2:30 p.m.  Tuesday: 6:30 a.m. to 2:30 p.m.  Wednesday: 6:30 a.m. to 2:30 p.m.<span class=\"today\">  Thursday: 6:30 a.m. to 2:30 p.m.</span>  Friday: 6:30 a.m. to 2:30 p.m.  Saturday: 8:00 a.m. to 12:00 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_hellertown.jpg","Distance":-1,"Latitude":40.5795,"Longitude":-75.3411,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"10","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":13507,"durationValue":1269,"totalwaittime":"2110"},{"ClientID":6059,"ClientCode":"C4903","PSCName":"HNL PSC Northampton","AddressLine":"1825 Franklin Street","AddressLine2":"Tepes Plaza, Ste. C","AddressLine3":null,"County":"Northampton County","Country":null,"City":"Northampton","State":"PA","ZipCode":"18067","Phone":"(610) 440-2251","Fax":"(610) 440-2268","BussinessHours":"  Monday: 6:00 a.m. to 4:30 p.m.  Tuesday: 6:00 a.m. to 4:30 p.m.  Wednesday: 6:00 a.m. to 4:30 p.m.<span class=\"today\">  Thursday: 6:00 a.m. to 4:30 p.m.</span>  Friday: 6:00 a.m. to 4:30 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_northampton.jpg","Distance":-1,"Latitude":40.6876,"Longitude":-75.4988,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"15","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Closed","CompanyHolidayResponse":null,"distanceValue":11719,"durationValue":1189,"totalwaittime":"2015"},{"ClientID":5762,"ClientCode":"C4596","PSCName":"HNL PSC Schoenersville Road","AddressLine":"3219 Schoenersville Road","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Bethlehem","State":"PA","ZipCode":"18017","Phone":"(610) 419-9789","Fax":"(610) 419-9758","BussinessHours":"  Monday: 6:00 a.m. to 5:00 p.m.  Tuesday: 6:00 a.m. to 5:00 p.m.  Wednesday: 6:00 a.m. to 5:00 p.m.<span class=\"today\">  Thursday: 6:00 a.m. to 5:00 p.m.</span>  Friday: 6:00 a.m. to 5:00 p.m.  Saturday: 7:00 a.m. to 11:00 a.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_schoenersville.jpg","Distance":-1,"Latitude":40.657,"Longitude":-75.4185,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"25","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":9961,"durationValue":837,"totalwaittime":"1425"},{"ClientID":6006,"ClientCode":"C4854","PSCName":"HNL PSC Emmaus","AddressLine":"1040 Chestnut Street","AddressLine2":"","AddressLine3":null,"County":"Lehigh County","Country":null,"City":"Emmaus","State":"PA","ZipCode":"18049","Phone":"(610) 966-5353","Fax":"(610) 966-5344","BussinessHours":"  Monday: 7:00 a.m. to 4:00 p.m.  Tuesday: 7:00 a.m. to 4:00 p.m.  Wednesday: 7:00 a.m. to 4:00 p.m.<span class=\"today\">  Thursday: 7:00 a.m. to 4:00 p.m.</span>  Friday: 7:00 a.m. to 4:00 p.m.  Saturday: 7:00 a.m. to 12:00 p.m.  Sunday: Closed","Disclaimer":null,"ImagePath":"https://secureportal.healthnetworklabs.com/Apps/Content/PSCImages/psc_emmaus.jpg","Distance":-1,"Latitude":40.5288,"Longitude":-75.5052,"Active":null,"CurrentWaitTime":0,"WaitTimeDescription":"25","ShowWaitTime":false,"Response":null,"AdditionalMessage":null,"Holidays":null,"PSCCurrentStatusMessage":"Open","CompanyHolidayResponse":null,"distanceValue":13259,"durationValue":1117,"totalwaittime":"1925"}];
  }
  public get stores_list(): any[] {
    return this.stores;
  }
  public set stores_list(stores) {
    this.stores = stores;
  }
}
