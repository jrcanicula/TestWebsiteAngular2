import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us.component';
import { routing } from './front-page.route';
///import { CarouselModule } from './../carousel/carousel.module'
//import { OnsenModule, NgModule, CUSTOM_ELEMENTS_SCHEMA } from 'angular2-onsenui';

@NgModule({
    imports: [
      //OnsenModule,
      SharedModule,
      //CarouselModule,
      routing
  ],
  declarations: [AboutUsComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontPageModule { }
