import { RejoinSessionPage } from './../pages/rejoin-session/rejoin-session';
import { CreerSessionPage } from './../pages/creer-session/creer-session';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MeteoPage } from '../pages/meteo/meteo';
import { SessionsPage } from '../pages/sessions/sessions';
import { NewsPage } from '../pages/news/news';
import { HistoriquePage } from '../pages/historique/historique';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AuthPage } from './../pages/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    MeteoPage,
    SessionsPage,
    NewsPage,
    HistoriquePage,
    TabsPage,
    CreerSessionPage,
    RejoinSessionPage,
    HomePage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeteoPage,
    SessionsPage,
    NewsPage,
    HistoriquePage,
    TabsPage,
    CreerSessionPage,
    RejoinSessionPage,
    HomePage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
