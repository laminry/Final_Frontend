import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; //

import { NavbarComponent } from './navbar/navbar.component'; //
import { HomeComponent } from './home/home.component'; //
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation/reservation.component';
// import { AddComponent } from './add/add.component';//
// import { EditComponent } from './edit/edit.component';//

// constant for redirecting
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'reservation', component: ReservationComponent }
];
// -----------------------

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes) //
    ],
    exports: [RouterModule], //
    declarations: []
})
export class AppRoutingModule { }
