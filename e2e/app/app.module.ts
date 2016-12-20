import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInsightsModule } from 'ng2-appinsights';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RouteComponent } from './route.component';
import { routes } from './routes';

@NgModule({
    imports : [
        BrowserModule,
        AppInsightsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        {
            provide: 'Window',
            useValue: window
        }
    ],
    declarations : [AppComponent, RouteComponent],
    bootstrap : [AppComponent],
    exports: [RouterModule]
})
export class AppModule {
}