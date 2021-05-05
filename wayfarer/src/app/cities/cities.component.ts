import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities = [
    {
      name: 'San Fransisco',
      imgUrl: 'assets/san-fransisco.png'
    },
    {
      name: 'London',
      imgUrl: 'assets/london.png'
    },
    {
      name: 'Seattle',
      imgUrl: 'assets/seattle.png'
    },
    {
      name: 'Sydney',
      imgUrl: 'assets/sydney.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
