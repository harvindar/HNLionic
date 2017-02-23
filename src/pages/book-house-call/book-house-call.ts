import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import {Storage}from '@ionic/storage';
import {ScheduleHomeCallPage} from '../schedule-home-call/schedule-home-call';
import { Geolocation } from 'ionic-native';
import {Http} from '@angular/http';
import { NativeGeocoder, NativeGeocoderReverseResult } from 'ionic-native';
import {Calendar} from 'ionic-native';

/*
  Generated class for the BookHouseCall page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book-house-call',
  templateUrl: 'book-house-call.html',
  providers : [Storage]
})
export class BookHouseCallPage {

      housecallappointment;
    storage: Storage;
    selectedtest: Array<{title: string, selected: Boolean, id: Number}> = [];
    mindate: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage,public toastCtrl:ToastController, public http: Http) {
    
  this.housecallappointment = { line1: '', line2:'', city:'', state:'', zip:''};
  this.storage = storage;
  this.storage.get("user-selectedtest").then((val)=> {
   this.selectedtest = JSON.parse(val);
   this.mindate =   new Date().toISOString().slice(0, 10);;
   console.log(this.mindate);
  });
  
  }
  
  sethomeaddress(event) {
  let defaultaddress = this.gethomeaddress();
 this.housecallappointment.line1 = defaultaddress.line1;
  this.housecallappointment.line2 = defaultaddress.line2;
  this.housecallappointment.city = defaultaddress.city;  
this.housecallappointment.state = defaultaddress.state;
  this.housecallappointment.zip = defaultaddress.zip;
  
  }
  
  
  gethomeaddress () 
  {
  //TODO: This will be replaced by actual defualt home address set up in profile.
  return {line1: "536 Hamilton St", line2:"",  city:"Allentown", state: "PA", zip : "18101"};
  
  }
  
  save() {
  let housecall = {Id: new Date().valueOf(), Address: {line1: this.housecallappointment.line1, line2:this.housecallappointment.line2, city:this.housecallappointment.city, state: this.housecallappointment.state, zip: this.housecallappointment.zip}, AppointmentDate: this.housecallappointment.Date, Time: this.housecallappointment.Time, Test : this.selectedtest};
  
  this.storage.get("user-appointments").then((val)=> {
  let savedapptment = [];
  if(val != null) {
    savedapptment = JSON.parse(val);   
  }


savedapptment.push(housecall);

let strval = JSON.stringify(savedapptment);
this.storage.set("user-appointments",strval );
//Add Calendar event
let location = housecall.Address.line1 + ", " + housecall.Address.line2 + ", " + housecall.Address.city + ", " + housecall.Address.state + ", " + housecall.Address.zip;
 let appdate  = new Date( Date.parse(this.housecallappointment.Date));

Calendar.createEvent("HNL House Call Schedule",location, "You have house call scheduled", appdate, appdate).then((msg)=> {
console.log(msg);

}, (err)=>{
console.log(err);

});


this.presentToast("Done");
    this.navCtrl.setRoot(ScheduleHomeCallPage);

  });  
}

cancel(event) {
this.navCtrl.setRoot(ScheduleHomeCallPage);


}
  
  getaddressbygeolocation() {
  
  Geolocation.getCurrentPosition().then((resp) => {
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);
 let url = "https://maps.googleapis.com/maps/api/geocode/json?&latlng="+resp.coords.latitude + "," + resp.coords.longitude + "&key=AIzaSyCCyBZmNL55HQ9luWoTfGjoG_1jFDi99Tg";
 



NativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
  .then((result: NativeGeocoderReverseResult) => 
  
{

          this.housecallappointment.line1 = result.houseNumber;
          this.housecallappointment.line2 = result.street;
         this.housecallappointment.city = result.city;
          this.housecallappointment.zip = result.postalCode;
          //this.housecallappointment.state = result.;
  
} 
  
  
  )
  .catch((error: any) => console.log(error));

 
//   this.http.get(url).subscribe((respadd)=>{
//   let jobj = JSON.parse(respadd["_body"]);
// //city
// this.housecallappointment.city = jobj.results[0].address_components[jobj.results[0].address_components.length-4].short_name;   
// for(let comp of jobj.results[0].address_components)
// {
 
// console.log(comp);
// switch(comp.types[0])
// {
//     case "route" :
//           this.housecallappointment.line1 = comp.short_name;
//           break;
//     case "political" :
//           this.housecallappointment.line2 += " " + comp.short_name;
//           break;
//     case "locality" :
//          this.housecallappointment.city = comp.short_name;
//          break;
//     case "postal_code" :
//           this.housecallappointment.zip = comp.short_name;
//           break;
//     case "administrative_area_level_1" :
//           this.housecallappointment.state = comp.short_name;
//           break;
//    default: 
//           break;
// }

// }

//   });
}).catch((error) => {
  console.log('Error getting location', error.toString());
});
  
  }
  
  
setdatetoday(event) {
this.housecallappointment.Date  = new Date().toISOString();

}

setdatetomorrow(event) {
  var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);
this.housecallappointment.Date  = currentDate.toISOString();


}

settimenow(event) {
this.housecallappointment.Time  = new Date().toISOString(); 
}

  
presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
