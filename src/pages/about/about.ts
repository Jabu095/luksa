import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public boss:any;
  constructor(public navCtrl: NavController) {

  }

  change(text){
    this.boss = text;
    return this.boss;
  }

}
