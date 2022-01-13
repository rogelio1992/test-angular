import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './../models/car';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransportationService {

  constructor(private http: HttpClient) { }
  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  cars: Car[] = [this.subaru];


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/cars');


  }
}
