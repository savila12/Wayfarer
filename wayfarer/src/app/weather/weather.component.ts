import {Component, Input, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {CITIES} from '../cities';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities: any = CITIES;

  @Input() city: any;

  weather: any;
  searchSubject = new Subject();
  constructor(private http: HttpClient) { }

  findWeather(cityName): any{
    this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7d9df711577e88fe5a9338aefe9707c9&&units=imperial`)
      .subscribe(response => this.weather = response);
  }

  ngOnChanges(): void {
    this.findWeather(this.city);
  }
  ngOnInit(): void {
    this.findWeather(this.city);
  }

}
