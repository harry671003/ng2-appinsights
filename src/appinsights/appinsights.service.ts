import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AppInsightsService {
    /**
     * App Insights Service
     */
    constructor(@Inject('AppInsights') private appInsights: any) {
        console.log(appInsights);
    }
}