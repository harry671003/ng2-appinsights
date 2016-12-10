import { NgModule } from '@angular/core';

import { AppInsightsComponent } from './appinsights.component';
import { AppInsightsService, AppInsightsModule } from '../build';

@NgModule({
    bootstrap: [ AppInsightsComponent ],
    declarations: [
        AppInsightsComponent,
    ],
    imports: [
        AppInsightsModule,
    ],
    providers: [
        {
            provide: 'Window',
            useValue: window,
        },
        AppInsightsService,
    ]
})
export class AppModule {
}
