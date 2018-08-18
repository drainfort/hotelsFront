import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import HotelServiceImpl from '../services/hotel/hotel.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    HotelServiceImpl
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
