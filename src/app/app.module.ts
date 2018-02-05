import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgProgressModule} from 'ngx-progressbar';
import {LoginComponent} from '../components/login/login';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from '../components/home/home';
import {AuthService} from '../services/auth';
import {MainComponent} from '../components/main/main';
import {CanActivateViaAuthGuard} from '../guards/auth';
import {routesNames} from '../constants/routes';
import {LoginModule} from '../components/login/login.module';
import {MainModule} from '../components/main/main.module';
import {AppComponent} from './app';

const routes: Routes = [
  {
    path: routesNames.login,
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [CanActivateViaAuthGuard],
    children: [
      {
        path: routesNames.home,
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: routesNames.login
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    MainModule,
    RouterModule.forRoot(routes),
    NgProgressModule
  ],
  providers: [
    AuthService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

