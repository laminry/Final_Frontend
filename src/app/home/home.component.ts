import { Component, OnInit } from '@angular/core';
import { Checking } from '../models/checking';
import { AvailableService } from '../services/available.service'; // Import service
import { Room } from '../models/rooms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];

  filterrooms: Checking = {
    checkin: '',
    checkout: '',
    noadults: 0,
    nochildren: 0
  };

  constructor(private roomService: AvailableService, private datepipe: DatePipe) { }

  ngOnInit() {
  }
  checkSearch() {
    this.filterrooms.checkin = this.datepipe.transform(this.filterrooms.checkin, 'yyyy-MM-dd');
    this.filterrooms.checkout = this.datepipe.transform(this.filterrooms.checkout, 'yyyy-MM-dd');
    this.roomService.getAvailable(this.filterrooms).subscribe(res => { this.rooms = res; });
    console.log(this.filterrooms);
  }
}
