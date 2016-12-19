/**
 * App Insights Configuration Contract
 * 
 * @export
 * @interface IConfig
 */
export interface IConfig {
    // The key of your Application Insights resource in Azure
    instrumentationKey: string;

    // The Application Insights server
    endpointUrl?: string;

    accountId?: string;

    // A session is logged if the user is inactive for this time in milliseconds. Default 30 mins.
    sessionRenewalMs?: number;

    // A session is logged if it has continued for this time in milliseconds. Default 24h.
    sessionExpirationMs?: number;

    // Default 100k
    maxBatchSizeInBytes?: number;

    // Default 15s
    maxBatchInterval?: number;

    // If true, data is sent immediately and not batched.
    enableDebug?: boolean;

    // If true, telemetry data is not collected or sent. Default false.
    disableTelemetry?: boolean; 

    // Default false
    verboseLogging?: boolean;

    // Controls what percentage of events will be sent
    // Default 100. 
    samplingPercentage?: boolean;

    // Default 10s
    diagnosticLogInterval?: number;

    // If true, exceptions are not monitored. 
    disableExceptionTracking?: boolean;

    // If true, ajax calls are not monitored.
    disableAjaxTracking?: boolean;

    // If true, default behavior of trackPageView is changed to record end of page view duration interval when 
    // trackPageView is called. If false and no custom duration is provided to trackPageView, the page view
    // performance is calculated using the navigation timing API.
    overridePageViewDuration?: boolean;

    // Default 500 - controls how many ajax calls will be monitored per page view.
    // Set to -1 to monitor all ajax calls on the page.
    maxAjaxCallsPerView?: number;

    // If true, the SDK will not store or read any data from cookies.
    // Default: false
    isCookieUseDisabled?: boolean;

    // Custom cookie domain. This is helpful if you want to share Application Insights cookies across subdomains.
    cookieDomain?: string;

    // Default false. If true, flush method will not be called when onBeforeUnload event triggers.
    disableFlushOnBeforeUnload?: boolean;

    // If true, the buffer with all unsent telemetry is stored in a session storage. The buffer is resotered on page load.
    // The feature is enable by default starting with v0.23.0. 
    enableSessionStorageBuffer?: boolean;

    // Is retry handler disabled. Default false.
    // If enabled, retry on 206 (partial success), 408 (timeout), 429 (too many requests), 500 (internal server error) and 503 (service unavailable).
    isRetryDisabled?: boolean;

    // The url from where the JS SDK will be downloaded. 
    // Default 'https://az416426.vo.msecnd.net/scripts/a/ai.0.js'
    url?: string;

    // If true, the SDK will not store or read any data from local and session storage.
    // Default: false
    isStorageUseDisabled?: boolean;
}