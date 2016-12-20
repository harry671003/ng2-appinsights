import { NgModule, Inject, ErrorHandler } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';

import { AppInsightsService } from './appinsights.service';
import { AppInsightsErrorHandler } from './errorhandler';

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
        {
            provide: ErrorHandler,
            useClass: AppInsightsErrorHandler,
        }
    ]
})
export class AppInsightsModule {}