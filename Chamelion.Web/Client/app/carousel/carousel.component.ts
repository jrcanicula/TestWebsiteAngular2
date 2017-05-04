import { Component, ViewChild } from 'angular2-onsenui';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent {

    @ViewChild('carousel') carousel: any;

    prev() {
        this.carousel.nativeElement.prev();
    }
    next() {
        this.carousel.nativeElement.next();
    }
}