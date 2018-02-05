import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})

export class LoginModule {
}

