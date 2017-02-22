import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RhizomePage } from "../rhizome/rhizome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showMenuItem:boolean = false;
  myRhizomes: any[] = [
    {name:"Still", discription:"2 temps, heater, cooling pump"},
    {name:"Fermentor", discription:"temp, heater, cooling pump"},
    {name:"mini-HOPS", discription:"3 temps, 2 heaters, 2 pumps"}
  ]
  constructor(public navCtrl: NavController) {

  }
  fabClick(){
    this.showMenuItem=!this.showMenuItem;
  }
  openRhizomePage(){
    this.navCtrl.push(RhizomePage);
  }
}
