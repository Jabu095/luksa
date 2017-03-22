import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Auth} from "../../providers/auth";
import {RegistrationPage} from '../registration/registration';
import {WelcomePage} from "../welcome/welcome";
/*
  Generated class for the Forgotpass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html'
})
export class ForgotpassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:Auth) {}

  registration(){
    this.navCtrl.push(RegistrationPage);

  }

  skip(){
    this.navCtrl.push(WelcomePage);
  }

  send(){
    this.auth.sendEmail().then((res)=>{

    });
  }

}
