import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; // BS Datepicker
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module'; //

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// SERVICES
import { AvailableService } from './services/available.service'; // Import service
import { RoomService } from './services/room.service';
import { ReservationService } from './services/reservation.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RoomsComponent,
    ReservationComponent,
    FooterComponent,
  ],
  imports: [
    BsDatepickerModule.forRoot(), // BS DATE PICKER
    // NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AvailableService, RoomService, ReservationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
