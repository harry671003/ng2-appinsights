import { NgModule } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';

@NgModule({
    providers: [
        {
            provide: 'AppInsights',
            useValue: AppInsights,
        },
    ]
})
export class AppInsightsModule {

}