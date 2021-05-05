import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input('cityIndex') cityIndex: number;
  @Input('city') city: any;
  constructor() { }

  ngOnInit(): void {
  }

}
