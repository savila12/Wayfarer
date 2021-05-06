import { Component, OnInit } from '@angular/core';
import {CityComponent } from '../city/city.component';
import {CITIES} from '../cities';
import {WeatherComponent} from '../weather/weather.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: any = CITIES;
  //weatherComponent: WeatherComponent;

  constructor() {}

  ngOnInit(): void {
  }

}
