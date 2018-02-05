import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home';
import {AuthService} from '../../services/auth';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    AuthService
  ]
})

export class HomeModule {
}

