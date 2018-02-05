import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth';
import {routesNames} from '../constants/routes';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public canActivate(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate([routesNames.login]);
    }
    return isLoggedIn;
  }

}
