import {Component} from '@angular/core';
import {AuthService} from '../../services/auth';
import {Router} from '@angular/router';
import {routesNames} from '../../constants/routes';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public get username(): string {
    return this.authService.username;
  }

  public logout(): void {
    this.authService.deleteUsername();
    this.router.navigate([routesNames.login]);
  }
}
