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

@NgModule({
  declarations: [
    MyApp,
    MeteoPage,
    SessionsPage,
    NewsPage,
    HistoriquePage,
    TabsPage,
    CreerSessionPage,
    RejoinSessionPage
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
    RejoinSessionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
