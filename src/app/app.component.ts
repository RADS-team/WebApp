import { HomePage } from './../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';
import { RejoinSessionPage } from './../pages/rejoin-session/rejoin-session';
import { CreerSessionPage } from './../pages/creer-session/creer-session';
import { Component,ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any;
  pages: Array<{title: string, component: any}>;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Creer Session', component: CreerSessionPage },
      { title: 'Rejoindre Session', component: RejoinSessionPage },
      { title: 'Test', component: HomePage },
      { title: 'Retour accueil', component: TabsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkPreviousAuthorization();
        });
  }
  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = AuthPage;
    } else {
      this.rootPage = TabsPage;
    }
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
