import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgProgressModule} from 'ngx-progressbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routesNames} from '../constants/routes';
import {AppComponent} from './app';
import {HomeComponent} from '../pages/home/home.component';
import {HomeModule} from '../pages/home/home.module';

const routes: Routes = [
  {
    path: routesNames.home,
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: routesNames.home
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HomeModule,
    NgProgressModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

