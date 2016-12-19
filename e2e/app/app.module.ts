import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppInsightsModule } from 'ng2-appinsights';

import {AppComponent} from './app.component';

@NgModule({
    imports : [
        BrowserModule,
        AppInsightsModule,
    ],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
export class AppModule {
}