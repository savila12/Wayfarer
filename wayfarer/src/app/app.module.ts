import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CitiesComponent } from './cities/cities.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { TopicComponent } from './topic/topic.component';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CitiesComponent,
    CarouselBasicComponent,
    TopicComponent,
    CityComponent,
    PostComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
