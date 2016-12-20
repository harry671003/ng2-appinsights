import { Injectable, ErrorHandler } from '@angular/core';

import { SeverityLevel } from './severitylevel';
import { AppInsightsService } from './appinsights.service'

/**
 * App Insights Error Handler
 */
@Injectable()
export class AppInsightsErrorHandler extends ErrorHandler {
    constructor(private appInsightsService: AppInsightsService) {
        super(true);
    }

    handleError(error: any) {
        this.appInsightsService.trackException(error, 'unhandled', null, null, SeverityLevel.Error);

        // delegate to the default handler
        super.handleError(error);
    }
}