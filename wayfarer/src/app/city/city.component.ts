import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CITIES} from '../cities';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any = CITIES;
  city: any;
   constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = CITIES.find(city => {
          return city.id === parseInt(params.get('id'), 10);
        });
      });
  }

}
