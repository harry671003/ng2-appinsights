import { NgModule, Inject, ErrorHandler } from '@angular/core';
import { AppInsightsLibraryService } from '../lib/appinsightslibrary.service';

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
        AppInsightsLibraryService,
        AppInsightsService,
        {
            provide: ErrorHandler,
            useClass: AppInsightsErrorHandler,
        }
    ]
})
export class AppInsightsModule {}