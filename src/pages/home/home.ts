import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthPage } from '../auth/auth';
import { NewsPage } from '../news/news';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  
     constructor(public nav: NavController) {
         this.nav = nav;
         this.username = window.localStorage.getItem('username');
     }
     test():void{
         this.nav.setRoot(NewsPage);
         this.nav.popToRoot(); 
     }
     logout(): void {
         window.localStorage.removeItem('username');
         window.localStorage.removeItem('password');
  
         this.nav.setRoot(AuthPage);
         this.nav.popToRoot();   
     }   
}
