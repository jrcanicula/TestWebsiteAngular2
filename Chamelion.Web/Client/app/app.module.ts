import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
//import { OnsenModule } from 'angular2-onsenui';
//import { CustomHttp } from './shared/services/custom-http.service'
//import { Http, XHRBackend, RequestOptions } from '@angular/http'

import { ApiTranslationLoader } from './shared/services/api-translation-loader.service';

import { routing } from './app.routes';
import { AppService } from './app.service';
import { appReducer } from './app-store';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        routing, 
        NgbModule,
        // FormsModule,
        HttpModule,
        // Only module that app module loads
        CoreModule.forRoot(),
        SharedModule.forRoot(),
        //OnsenModule,
        HomeModule,
        StoreModule.provideStore(appReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: ApiTranslationLoader } })
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
