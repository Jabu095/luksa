import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";
import {LoginPage} from "../login/login";
import {Auth} from "../../providers/auth";

/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:Auth) {}

  skip(){
    this.navCtrl.push(WelcomePage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.auth.register().then((res)=>{

    });
  }

}
