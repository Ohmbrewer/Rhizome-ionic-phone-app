import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Equipment } from "../../interfaces/equipment.interface";
import { Temperature } from "../../interfaces/temperature.interface";

@Component({
  selector: 'page-rhizome',
  templateUrl: 'rhizome.html'
})
export class RhizomePage {
  pins1_2: Equipment[]= [{name:"Drain Valve", icon:"cog", isOn:false, pin:1},
                        {name:"Coolant Pump", icon:"snow", isOn:false, pin:2},
                        ];
  pins3_4: Equipment[]= [{name:"n/a", icon:"infinite", isOn:false, pin: 3},
                        {name:"Brewery Light", icon:"bulb", isOn:true, pin: 4}];
  pins5_6: Equipment[]= [{name:"Tank Heating Element", icon:"flame", isOn:true, pin:5},
                        {name:"TempPin", icon:"thermometer", isOn:false, pin:6}];
  temps: Temperature[] = [{name:"Column", temp:68, isCelcius:true},
                          {name:"Tank", temp:96, isCelcius:true}];
  targetTemps: Temperature[] = [{name:"Column", temp:78, isCelcius:true},
                          {name:"Tank", temp:100, isCelcius:true}];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RhizomePage');
  }

  adjustTargetTemp(temp:Temperature){
    let prompt = this.alertCtrl.create({
    title: 'Set new target temp',
    message: "enter a new temperature for "+ temp.name,
    inputs: [{name: 'newTemp',placeholder: '98.6'},
             {type: 'radio', label:"C", value:"true", checked: true},
             {type: 'radio', label:"F", value:"false", checked: false}],

    buttons: [{text: 'Cancel', handler: data => {console.log('Cancel clicked');} },
              {text: 'Save', handler: data => { console.log('Saved clicked'); } }]
    });
    prompt.present();
  }

  toggleEquipmentPower(equip:Equipment){
    equip.isOn = !equip.isOn;
  }

}
