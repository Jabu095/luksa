import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {Auth} from '../providers/auth';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {RegistrationPage} from '../pages/registration/registration';
import {ForgotpassPage} from '../pages/forgotpass/forgotpass';
import {WelcomePage} from  '../pages/welcome/welcome';
import {TodayAgendaPage} from '../pages/today-agenda/today-agenda';
import {GivePage} from '../pages/give/give';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TutorialPage,
    RegistrationPage,
    ForgotpassPage,
    WelcomePage,
    TodayAgendaPage,
    GivePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TutorialPage,
    RegistrationPage,
    ForgotpassPage,
    WelcomePage,
    TodayAgendaPage,
    GivePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Auth]
})
export class AppModule {}
