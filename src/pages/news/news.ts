import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthPage } from '../auth/auth';
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  username: string;
  
     constructor(public nav: NavController) {
         this.nav = nav;
         this.username = window.localStorage.getItem('username');
     }
     logout(): void {
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('password');

      this.nav.setRoot(AuthPage);
      this.nav.popToRoot();   
  }   

}
