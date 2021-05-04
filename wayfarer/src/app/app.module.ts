import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CitiesComponent } from './cities/cities.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CitiesComponent,
    CarouselBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
