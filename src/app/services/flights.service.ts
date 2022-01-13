import { getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http:HttpClient) { }


  getFligths(orig:string,dest:string):Observable<Flight[]> {
    return this.http.get<Flight[]>(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }
}
