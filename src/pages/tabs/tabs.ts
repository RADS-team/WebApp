import { Component } from '@angular/core';

import { MeteoPage } from '../meteo/meteo';
import { SessionsPage } from '../sessions/sessions';
import { NewsPage } from '../news/news';
import { HistoriquePage } from '../historique/historique';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = MeteoPage;
  tab3Root = SessionsPage;
  tab4Root = HistoriquePage;

  constructor() {

  }
}
