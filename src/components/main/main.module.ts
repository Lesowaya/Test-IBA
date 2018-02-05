import {NgModule} from '@angular/core';
import {MatSidenavModule, MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from '../../services/auth';
import {HomeModule} from '../home/home.module';
import {MainComponent} from './main';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule
  ],
  providers: [
    AuthService
  ]
})

export class MainModule {
}

