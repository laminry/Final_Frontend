import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Checking } from '../models/checking';
import { Observable } from 'rxjs/Observable';
import { Room } from '../models/rooms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable()
export class AvailableService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8000/api/availablerooms';

  // getRooms(): Observable<Checking[]> {
  //   return this.http.get<Checking[]>(this.url);
  // }

  getAvailable(formData): Observable<Room[]> {
    return this.http.post<Room[]>(this.url, formData, httpOptions ).map(res => {
      console.log(res);
      return res;
    });
  }

}
