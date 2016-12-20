# ng2-appinsights

## Installation

```cmd
npm install ng2-appinsights --save
```

## Usage

### Initialization

Inside your app module import `AppInsightsModule`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInsightsModule } from 'ng2-appinsights';

import { AppComponent } from './app.component';

@NgModule({
    imports : [
        BrowserModule,
        AppInsightsModule,
    ],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
export class AppModule {
}
```

Inside your app component initialize the AppInsightsService

```ts
import { Component } from '@angular/core';
import { AppInsightsService } from 'ng2-appinsights';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private appinsightsService: AppInsightsService) {
        this.appinsightsService.Init({
            instrumentationKey: 'INSTRUMENTATION_KEY'
        });
    }
}
```

### Configurations

To configure the service pass a configuration object in the Init method

```ts
this.appinsightsService.Init({
    instrumentationKey: 'INSTRUMENTATION_KEY', // Required field
    enableDebug: false,
    maxAjaxCallsPerView: 50,
    disableTelemetry: true
});
```

The complete list of configuration options are

#### instrumentationKey;
The key of your Application Insights resource in Azure

#### endpointUrl: string;
The Application Insights server

#### accountId: string;
User Account Id

#### sessionRenewalMs: number;
A session is logged if the user is inactive for this time in milliseconds. Default 30 mins. 

#### sessionExpirationMs: number;
A session is logged if it has continued for this time in milliseconds. Default 24h.

#### maxBatchSizeInBytes: number;
Default 100k

#### maxBatchInterval: number;
Default 15s

#### enableDebug: boolean;
If true, data is sent immediately and not batched.

#### disableTelemetry: boolean;
If true, telemetry data is not collected or sent. Default false. 

#### verboseLogging: boolean;
Default false

#### samplingPercentage: boolean;
Controls what percentage of events will be sent
Default 100.

#### diagnosticLogInterval: number;
Default 10s
 
#### disableExceptionTracking: boolean;
If true, exceptions are not monitored.

#### disableAjaxTracking: boolean;
If true, ajax calls are not monitored.

#### overridePageViewDuration: boolean;
If true, default behavior of trackPageView is changed to record end of page view duration interval when 
trackPageView is called. If false and no custom duration is provided to trackPageView, the page view
performance is calculated using the navigation timing API.

#### maxAjaxCallsPerView: number;
Default 500 - controls how many ajax calls will be monitored per page view.
Set to -1 to monitor all ajax calls on the page.

#### isCookieUseDisabled: boolean;
If true, the SDK will not store or read any data from cookies.
Default: false

#### cookieDomain: string;
Custom cookie domain. This is helpful if you want to share Application Insights cookies across subdomains.

#### disableFlushOnBeforeUnload: boolean;
Default false. If true, flush method will not be called when onBeforeUnload event triggers.

#### enableSessionStorageBuffer: boolean;
If true, the buffer with all unsent telemetry is stored in a session storage. The buffer is resotered on page load.
The feature is enable by default starting with v0.23.0. 

#### isRetryDisabled: boolean;
Is retry handler disabled. Default false.
If enabled, retry on 206 (partial success), 408 (timeout), 429 (too many requests), 500 (internal server error) and 503 (service unavailable).

#### url: string;
The url from where the JS SDK will be downloaded. 
Default 'https://az416426.vo.msecnd.net/scripts/a/ai.0.js'

#### isStorageUseDisabled: boolean;
If true, the SDK will not store or read any data from local and session storage.
Default: false

### API Reference

Check [Microsoft Application Insights API Reference](https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md) for API reference

Check [e2e/app/app.component.ts](e2e/app/app.component.ts) for examples