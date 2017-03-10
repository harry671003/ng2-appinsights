import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { AppInsightsService, SeverityLevel } from 'ng2-appinsights';
import { Observable } from 'rxjs/observable';

declare let Zone: any;

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    private value: string;

    constructor(private appinsightsService: AppInsightsService, private location: Location) {
        this.appinsightsService.Init({
            instrumentationKey: 'AIF-2139c09a-72ff-48d2-a32b-bee7b807695c',
            verboseLogging: true
        });
    }

    trackException() {
        this.appinsightsService.trackException(
            new Error('Sample Error'),
            'SampleFunctionName',
            { sampleProp: 'sampleProp' },
            { sampleMeasurement: 1 },
            SeverityLevel.Error
        );
    }

    trackEvent() {
        this.appinsightsService.trackEvent(
            'SampleEvent',
            { sampleProp: 'sampleProp' },
            { sampleMeasurement: 1 }
        );
    }

    trackTrace() {
        this.appinsightsService.trackTrace(
            'SampleEvent',
            { SeverityLevel: 0 },
            { sampleMeasurement: 1 }
        );
    }

    trackDependecny() {
        this.appinsightsService.trackDependency(
            'DependencyID',
            'SampleMethod',
            'http://url',
            'samplePath',
            13,
            true,
            0
        );
    }

    trackMetric() {
        const metric = {
            name: 'SampleMetric',
            average: 5,
            count: 10,
            min: 1,
            max: 10
        }

        this.appinsightsService.trackMetric(
            metric.name,
            metric.average,
            metric.count,
            metric.min,
            metric.max
        );
    }

    trackPageView() {
        this.appinsightsService.trackPageView();
    }

    clearAuthenticatedUserContext() {
        this.appinsightsService.clearAuthenticatedUserContext();
    }

    setAuthenticatedUserContext() {
        this.appinsightsService.setAuthenticatedUserContext('harry671003', '123');
    }

    startTrackPage() {
        this.appinsightsService.startTrackPage('PAGE_LOAD');
    }

    stopTrackPage() {
        this.appinsightsService.stopTrackPage('PAGE_LOAD');
    }

    flush() {
        this.appinsightsService.flush();
    }

    throwUnhandledError() {
        throw new Error('Unhandled Error');
    }
}