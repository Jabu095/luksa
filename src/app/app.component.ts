///<reference path="../pages/tutorial/tutorial.ts"/>
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {LoginPage} from '../pages/login/login';
import {Auth} from '../providers/auth';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform,public auth: Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.auth.tutorial().then((isFirstTime)=>{
        if(isFirstTime){
          this.rootPage = TutorialPage;
        }else {
          this.auth.login().then((isLogin)=>{
            if(isLogin){
              this.rootPage = LoginPage;
            }else {
              this.rootPage = TabsPage;
            }
          });

        }
      });
    });
  }
}
