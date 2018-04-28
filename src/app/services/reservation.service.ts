import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Checking } from '../models/checking';
import { Observable } from 'rxjs/Observable';
import { Reservation } from '../models/reservation';
import { Room } from '../models/rooms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ReservationService {
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8000/api/postbooking';
  // getRooms(): Observable<Checking[]> {
  //   return this.http.get<Checking[]>(this.url);
  // }

  submitReservation(reservationform): Observable<Reservation[]> {
    return this.http.post<Reservation[]>(this.url, reservationform, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }

}


