import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Room } from '../models/rooms';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RoomService {

  constructor(private http: HttpClient, private http2: Http) { }
  private url = 'http://localhost:8000/api/allrooms';

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url);
  }

  getType(rid: any) {
    // return this.http2.get('http://localhost:8000/api/type/' + rid).map(res => res.json());
  }

}
