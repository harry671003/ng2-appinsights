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
import { AppInsightsService, SeverityLevel } from 'ng2-appinsights';

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

### API

See check [e2e/app/app.component.ts]("e2e/app/app.component.ts") for examples