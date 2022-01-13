import { TransportationService } from './../services/transportation.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  constructor(private TransportationService:TransportationService) { }

  ngOnInit(): void {
    this.TransportationService.getCars()
      .subscribe(data =>
        this.cars = data,
      )

  };
  }


