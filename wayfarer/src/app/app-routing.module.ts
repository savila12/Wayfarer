import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import {TopicComponent} from './topic/topic.component';



const routes: Routes = [
  {
    path: '',
    component: CarouselBasicComponent
  },
  {
    path: '',
    component: TopicComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
