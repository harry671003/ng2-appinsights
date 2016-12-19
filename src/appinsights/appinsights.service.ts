import { Injectable, Inject } from '@angular/core';

import { SeverityLevel, IConfig } from '../';

/**
 * App Insights Service
 */
@Injectable()
export class AppInsightsService {
    constructor(@Inject('AppInsights') private appInsights: any) {

    }

    Init(config: IConfig) {
        this.appInsights.downloadAndSetup(config);
    }

    /**
     * Track Page View
     * 
     * @param {string} [name] - The name used to identify the page in the portal. 
     * Defaults to the document title.
     * @param {string} [url] - A relative or absolute URL that identifies the
     * page or similar item. Defaults to the window location.
     * @param {*} [properties] - Map of string to string: Additional data 
     * used to filter pages in the portal. Defaults to empty.
     * @param {*} [measurements] - Map of string to number: Metrics associated 
     * with this page, displayed in Metrics Explorer on the portal.
     * Defaults to empty.
     * @param {number} [duration] - The number of milliseconds it took to load 
     * this page, displayed in Metrics Explorer on the portal. Defaults to empty.
     * If empty, end of page view duration is recorded when browser page load event is called.
     * 
     * @memberOf AppInsightsService
     */
    trackPageView(
        name?: string,
        url?: string,
        properties?: any,
        measurements?: any,
        duration?: number
    ): void {
        this.appInsights.trackPageView(name, url, properties, measurements, duration);
    }

    /**
     * Track Event
     * 
     * @param {string} name - Identifies the event. Events with the same name are
     * counted and can be charted in Metric Explorer.
     * @param {*} [properties] - Map of string to string: Additional data used to
     * filter events in the portal. Defaults to empty.
     * @param {*} [measurements] - Map of string to number: Metrics associated with 
     * this page, displayed in Metrics Explorer on the portal. Defaults to empty.
     * 
     * @memberOf AppInsightsService
     */
    trackEvent(
        name: string,
        properties?: any,
        measurements?: any
    ): void {
        this.appInsights.trackEvent(name, properties, measurements);
    };

    /**
     * Track Metric
     * 
     * @param {string} name - A string that identifies the metric. In the portal,
     * you can select metrics for display by name.
     * @param {number} average - Either a single measurement, or the average of 
     * several measurements. Should be >=0 to be correctly displayed.
     * @param {number} [sampleCount] - Count of measurements represented by the 
     * average. Defaults to 1. Should be >=1.
     * @param {number} [min] - The smallest measurement in the sample. Defaults 
     * to the average. Should be >= 0.
     * @param {number} [max] - The largest measurement in the sample. Defaults to 
     * the average. Should be >= 0.
     * @param {*} [properties] - Map of string to string: Additional data used to 
     * filter events in the portal.
     * 
     * @memberOf AppInsightsService
     */
    trackMetric(
        name: string,
        average: number,
        sampleCount?: number,
        min?: number,
        max?: number,
        properties?: any
    ): void {
        this.appInsights.trackMetric(name, average, sampleCount, min, max, properties);
    }

    /**
     * Track Exception
     * 
     * @param {Error} exception - An Error from a catch clause.
     * @param {string} [handledAt] - Defaults to "unhandled".
     * @param {*} [properties] - Map of string to string: Additional data used to 
     * filter exceptions in the portal. Defaults to empty.
     * @param {*} [measurements] - Map of string to number: Metrics associated 
     * with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
     * @param {SeverityLevel} [severityLevel] - SeverityLevel
     * 
     * @memberOf AppInsightsService
     */
    trackException(
        exception: Error,
        handledAt?: string,
        properties?: any,
        measurements?: any,
        severityLevel?: SeverityLevel
    ): void {
        this.appInsights.trackException(exception, handledAt, properties, measurements, severityLevel);
    }

    /**
     * Track Trace
     * 
     * @param {string} message - Diagnostic data. Can be much longer than a name.
     * @param {*} [properties] - Map of string to string: Additional data used to 
     * filter exceptions in the portal. Defaults to empty.
     * @param {*} [measurements] - Map of string to number: Metrics associated with this page,
     * displayed in Metrics Explorer on the portal. Defaults to empty.
     * 
     * @memberOf AppInsightsService
     */
    trackTrace(
        message: string,
        properties?: any,
        measurements?: any
    ): void {
        this.appInsights.trackTrace(message, properties, measurements);
    }

    /**
     * 
     * 
     * @param {string} id - Unique id, this is used by the backend o correlate server requests.
     * @param {string} method - Represents request verb (GET, POST, etc.)
     * @param {string} absoluteUrl - Absolute url used to make the dependency request
     * @param {string} pathName - Path part of the absolute url
     * @param {number} totalTime - Total request time
     * @param {boolean} success - Indicates if the request was sessessful
     * @param {number} resultCode - Response code returned by the dependency request
     * 
     * @memberOf AppInsightsService
     */
    trackDependency(
        id: string,
        method: string,
        absoluteUrl: string,
        pathName: string,
        totalTime: number,
        success: boolean,
        resultCode: number
    ): void {
        this.appInsights.trackDependency(id, method, absoluteUrl, pathName, totalTime, success, resultCode);
    }

    /**
     * Flush
     * 
     * @description
     * Immediately send all queued telemetry. Synchronous.
     * 
     * @memberOf AppInsightsService
     */
    flush() {
        this.appInsights.flush();
    }

    /**
     * Capture and log route changes automatically
     */
    private subscribeToRouteChanges() {
        throw new Error('Not Implemented');
        // TODO: Implement SubscribeToRouteChanges
    }
}