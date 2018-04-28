import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reservation } from '../models/reservation'; // Import booking model
import { NgForm } from '@angular/forms';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { DatePipe } from '@angular/common';
import { ReservationService } from '../services/reservation.service';
import { Room } from '../models/rooms';
import { RoomService } from '../services/room.service'; // Import service


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  bookings: Reservation[] = [];
  guessbooking: Reservation = {
    name: '',
    email: '',
    passid: '',
    room_id: null,
    checkin: '',
    checkout: '',
    noadults: 0,
    nochildren: 0,
    additional: ''
  };

 rourooms: Room[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private reservationService: ReservationService, private roomService: RoomService, private router: Router, private datepipe: DatePipe) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(res => { this.rourooms = res; });
  }


  reservationinfo(reservation: NgForm): void {
    this.guessbooking.checkin = this.datepipe.transform(this.guessbooking.checkin, 'yyyy-MM-dd');
    this.guessbooking.checkout = this.datepipe.transform(this.guessbooking.checkout, 'yyyy-MM-dd');
    this.reservationService.submitReservation(this.guessbooking).subscribe
    (res => {this.bookings = res; });
  }

}
