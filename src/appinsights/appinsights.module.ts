import { NgModule, Inject } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';
import { AppInsightsService } from './appinsights.service';

/**
 * App Insights Module
 * 
 * @export
 * @class AppInsightsModule
 */
@NgModule({
    providers: [
        {
            provide: 'AppInsights',
            useValue: AppInsights,
        },
        AppInsightsService,
    ]
})
export class AppInsightsModule {}