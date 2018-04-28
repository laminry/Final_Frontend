import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service'; // Import service
import { Room } from '../models/rooms'; // Import room model

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = [];
  bookInfo: any = {};
  result: any = {};
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(res => { this.rooms = res; });
    // console.log(this.rooms);
  }

  // bookNow(rid) {
  //   console.log(this.rooms.indexOf[0]);
    // this.roomService.getType(this.rooms['id']).subscribe(
    //   res => { this.result = res;
    //   console.log(this.result);
    //   },
    //   err => console.log(err.error)
    // );
  // }

}
