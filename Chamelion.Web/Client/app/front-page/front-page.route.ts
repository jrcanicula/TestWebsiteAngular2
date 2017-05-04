import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
//import { RegisterConfirmationComponent } from './+confirmation/register-confirmation.component';


const routes: Routes = [
    { path: '', redirectTo: 'about-us', pathMatch: 'full' },
    { path: 'about-us', component: AboutUsComponent },
];


export const routing = RouterModule.forChild(routes);
