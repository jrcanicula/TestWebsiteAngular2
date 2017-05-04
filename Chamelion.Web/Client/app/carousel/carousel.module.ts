import {OnsenModule, NgModule, CUSTOM_ELEMENTS_SCHEMA } from 'angular2-onsenui';
import { CarouselComponent } from './carousel.component';

@NgModule({
    imports: [OnsenModule],
    declarations: [CarouselComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CarouselModule { }
