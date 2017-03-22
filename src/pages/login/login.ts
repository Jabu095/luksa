import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from '../registration/registration';
import {ForgotpassPage} from "../forgotpass/forgotpass";
import {WelcomePage} from "../welcome/welcome";
import {Auth} from "../../providers/auth";
import {TabsPage} from "../tabs/tabs";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth) {}

  forgotPass(){
    this.navCtrl.push(ForgotpassPage);
  }

  registration(){
    this.navCtrl.push(RegistrationPage);

  }

  skip(){
    this.navCtrl.push(TabsPage);
  }

  login(){
    this.auth.login().then((res)=>{

    });
  }
}
