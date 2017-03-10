import { Injectable, Inject } from '@angular/core';
import { AppInsightsLibraryService } from '../lib/appinsightslibrary.service'

import { SeverityLevel, Config } from '../';

/**
 * App Insights Service
 */
@Injectable()
export class AppInsightsService {
    constructor(
        @Inject(AppInsightsLibraryService) appInsightsLibraryService: AppInsightsLibraryService
    ) {
        this.appInsights = appInsightsLibraryService.getAppInsightsInstance();
    }

    private appInsights: any;

    /**
     * Initialize app insights
     *
     * @param {Config} config
     *
     * @memberOf AppInsightsService
     */
    Init(config: Config) {
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
     * Track dependency
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
     * Set authenticated user context
     *
     * @description
     * Set the authenticated user id and the account id in this session.
     * Use this when you have identified a specific signed-in user.
     * Parameters must not contain spaces or ,;=|
     *
     * @param {string} authenticatedUserId - An id that uniquely identifies a user of your app.
     * No spaces, comma, semicolon, equals or vertical bar.
     * @param {string} [accountId] - An optional account id, if your app groups users into accounts.
     * No spaces, comma, semicolon, equals or vertical bar.
     *
     * @memberOf AppInsightsService
     */
    setAuthenticatedUserContext(
        authenticatedUserId: string,
        accountId?: string
    ): void {
        this.appInsights.setAuthenticatedUserContext(authenticatedUserId, accountId);
    }

    /**
     * Clear authenticated user context
     *
     * @description
     * Clears the authenticated user id and the account id from the user context,
     * and clears the associated cookie.
     *
     * @memberOf AppInsightsService
     */
    clearAuthenticatedUserContext (): void {
        this.appInsights.clearAuthenticatedUserContext();
    }

    /**
     * Start Track Page
     *
     * @description
     * Starts the timer for tracking a page view. Use this instead of trackPageView
     * if you want to control when the page view timer starts and stops, but don't
     * want to calculate the duration yourself. This method doesn't send any telemetry.
     * Call stopTrackPage to log the end of the page view and send the event.
     *
     * @param {string} [name] - The name used to identify the page in the portal.
     * Defaults to the document title.
     *
     * @memberOf AppInsightsService
     */
    startTrackPage(name?: string) {
        this.appInsights.startTrackPage(name);
    }

    /**
     * Stop Track Page
     *
     * @description
     * Stops the timer that was started by calling startTrackPage and sends the page view
     * telemetry with the specified properties and measurements. The duration of the page
     * view will be the time between calling startTrackPage and stopTrackPage.
     *
     * @param {string} [name] - The name used to identify the page in the portal.
     * Defaults to the document title.
     * @param {string} [url] - A relative or absolute URL that identifies the page or similar item.
     * Defaults to the window location.
     * @param {Object} [properties] - Map of string to string: Additional data used
     * to filter pages in the portal. Defaults to empty.
     * @param {Object} [measurements] - Map of string to number: Metrics associated with this page,
     * displayed in Metrics Explorer on the portal. Defaults to empty.
     *
     * @memberOf AppInsightsService
     */
    stopTrackPage(
        name?: string,
        url?: string,
        properties?: Object,
        measurements?: Object
    ): void {
        this.appInsights.stopTrackPage(name, url, properties, measurements);
    }
}