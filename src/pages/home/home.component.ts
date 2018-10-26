import {Component} from '@angular/core';
import {HomeService} from './home.service';
import {tabs} from '../../constants/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.styles.css']
})

export class HomeComponent {

  tabs = tabs;

  constructor(private homeService: HomeService) {
  }

  getTab() {
    return this.homeService.tab;
  }

  setTab(tab) {
    this.homeService.setTab(tab.index);
  }
}
