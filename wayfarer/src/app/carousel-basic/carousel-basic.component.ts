import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {

  // images = ['london.png', 'san-francisco.png', 'seattle.png', 'sydney.png'].map((n) => `wayfarer/src/assets/images/${n}`);

  constructor() { }

  ngOnInit(): void {
  }

}
