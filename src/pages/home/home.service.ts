import {Injectable} from '@angular/core';
import {localStorageVariables} from '../../constants/localStorage';

@Injectable()
export class HomeService {

  public tab = +localStorage.getItem(localStorageVariables.tab) || 0;

  setTab(tab) {
    this.tab = tab;
    localStorage.setItem(localStorageVariables.tab, tab);
  }
}
