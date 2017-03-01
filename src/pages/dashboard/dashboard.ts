import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ////////////
  public lineChartData: any[] = [
    { data: [130, 0, 0, 0, 0, 203, 0], label: 'Glucose' },
    { data: [120, 0, 0, 0, 0, 125, 0], label: 'Calcium' },
        { data: [130, 0, 0, 0, 0, 120, 0], label: 'Albumin' }

  ];

  public lineChartLabels:Array<any> = ['Mon', 'Tue','Wed', 'Thu','Fri', 'Sat','Sun'];


  public lineChartType:string = 'bar';
  public series: Array<any> = ['Se1','Se2','Se3'];
  public graphtype : string = 'Weekly';

  private lineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
responsive: true
  };

 public MonthlyChartData:Array<any> = [
 { data: [130, 0, 100, 0], label: 'Glucose' },
    { data: [120, 0, 120, 0], label: 'Calcium' },
        { data: [100, 0, 103, 0], label: 'Albumin' }    
  ];
  public MonthlyLabels:Array<any> = ['Week1', 'Week2', 'Week3', 'Week4'];
  public MonthlyChartType:string = 'line';

 public AllChartData:Array<any> = [
    { data: [100, 200, 230, 250], label: 'Glucose' },
    { data: [120, 120, 120, 100], label: 'Calcium' },
        { data: [100, 100, 130, 100], label: 'Albumin' }  
    
  ];
  public AllLabels:Array<any> = ['Nov', 'Dec', 'Jan', 'Feb'];
  public AlllChartType:string = 'line';
 
setgraph (grapselcted) {
  console.log(this.graphtype);

switch(grapselcted) 
{
case "line" : 
        if(this.graphtype == "Weekly" ) 
        {
          this.lineChartType = "line";
        }
          if(this.graphtype == "Monthly" ) 
        {
          this.MonthlyChartType = "line";
        }
          if(this.graphtype == "All" ) 
        {
          this.AlllChartType = "line";
        }
break;

case "bar" : 
   if(this.graphtype == "Weekly" ) 
           {
          this.lineChartType = "bar";
        }
          if(this.graphtype == "Monthly" ) 
        {
          this.MonthlyChartType = "bar";
        }
          if(this.graphtype == "All" ) 
        {
          this.AlllChartType = "bar";
        }
        
break;

case "doughnut" :
if(this.graphtype == "Weekly" ) 
           {
          this.lineChartType = "doughnut";
        }
          if(this.graphtype == "Monthly" ) 
        {
          this.MonthlyChartType = "doughnut";
        }
          if(this.graphtype == "All" ) 
        {
          this.AlllChartType = "doughnut";
        }
break;
}

}

}
