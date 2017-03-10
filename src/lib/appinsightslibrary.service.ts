import { Injectable } from '@angular/core';

/**
 * App Insights Library Service
 * The app insights module from the package applicationinsights-js
 * rewritten to typescript
 */
@Injectable()
export class AppInsightsLibraryService {
    constructor() {
        this.window = (<any>window);
    }
    private window: any;
    private _appInsightsInitialized: boolean = false;
    private _appInsightsName: string = 'appInsights';

    private _createLazyMethod(name: any) {
        const aiObject = this.window[this._appInsightsName];
        // Define a temporary method that queues-up a the real method call
        aiObject[name] = function () {
            // Capture the original arguments passed to the method
            const originalArguments = arguments;
            // If the queue is available, it means that the function wasn't yet replaced with actual function value
            if (aiObject.queue) {
                aiObject.queue.push(function () {
                    return aiObject[name].apply(aiObject, originalArguments);
                });
            }
            else {
                // otherwise execute the function
                aiObject[name].apply(aiObject, originalArguments);
            }
        };
    }

    private _defineLazyMethods() {
        const aiObject = this.window[this._appInsightsName];
        // capture initial cookie if possible
        try {
            aiObject.cookie = document.cookie;
        }
        catch (e) {
        }
        aiObject.queue = [];
        const method = [
            'clearAuthenticatedUserContext',
            'flush',
            'setAuthenticatedUserContext',
            'startTrackEvent',
            'startTrackPage',
            'stopTrackEvent',
            'stopTrackPage',
            'trackDependency',
            'trackEvent',
            'trackException',
            'trackMetric',
            'trackPageView',
            'trackTrace'
        ];
        while (method.length) {
            this._createLazyMethod(method.pop());
        }
    }

    private _getDownloadAndSetup() {
        const self = this;

        return function(aiConfig: any) {
            const aiObject = self.window[self._appInsightsName];
            aiObject.config = aiConfig
            // if script was previously downloaded and initialized, queue will be deleted, reinitialize it
            if (!aiObject.queue) {
                aiObject.queue = [];
            }
            const scriptElement = document.createElement('script');
            scriptElement.src = aiConfig.url || 'https://az416426.vo.msecnd.net/scripts/a/ai.0.js';
            document.head.appendChild(scriptElement);
            // collect global errors
            if (!aiConfig.disableExceptionTracking) {
                self._createLazyMethod('_onerror');
                const originalOnError = self.window['_onerror'];

                self.window['_onerror'] = function (message: any, url: any, lineNumber: any, columnNumber: any, error: any) {
                    const handled = originalOnError && originalOnError(message, url, lineNumber, columnNumber, error);
                    if (handled !== true) {
                        aiObject['_onerror'](message, url, lineNumber, columnNumber, error);
                    }
                    return handled;
                };
            }
        }
    }

    public getAppInsightsInstance () {
        if (!this.window[this._appInsightsName]) {
                this.window[this._appInsightsName] = {
                    downloadAndSetup: this._getDownloadAndSetup(),
                    // exposing it for unit tests only, not part of interface
                    _defineLazyMethods: this._defineLazyMethods
                };
                this._defineLazyMethods();
            }
            return this.window[this._appInsightsName];
    }
}