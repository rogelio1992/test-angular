import {FlightsService} from './../services/flights.service';
import {Component, OnInit} from '@angular/core';
import {Flight} from '../models/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flights: Flight[];
  selectedOrigin: string;
  selectedDestination: string;
  filteredOriginList: any[];
  filteredDestinationList: any[];

  constructor(private flightsService: FlightsService) {
  }

  ngOnInit(): void {


  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;
    console.log(origin, destination);
    this.flightsService.getFligths(origin, destination)
      .subscribe(data => {
        this.flights = data;
      });
  }

}
