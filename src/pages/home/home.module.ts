import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule {
}

