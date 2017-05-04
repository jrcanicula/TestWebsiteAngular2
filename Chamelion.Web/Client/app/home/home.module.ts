import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { routing } from './home.routes';

@NgModule({
    imports: [routing, NgbModule],
    declarations: [HomeComponent]
})
export class HomeModule {


}
