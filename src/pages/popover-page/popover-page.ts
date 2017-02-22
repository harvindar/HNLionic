import {Component} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'popover-page.html'
})

export class PopoverPage {
  items = [
    'With in 10 Miles',
    'With in 20 Miles',
    'With in 30 Miles',
    'With in 40 Miles'
  ];
  constructor(private viewCtrl: ViewController, private navParams: NavParams) { }

  ngOnInit() {
  }

  itemSelected() {
    console.log("Closing popover");
    this.viewCtrl.dismiss();
  }
}