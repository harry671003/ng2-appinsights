import { Component } from '@angular/core';
import { AppInsightsService } from '../build';

@Component({
  selector: 'app-banner',
  template: '<h1>{{title}}</h1>'
})
export class AppInsightsComponent {
  appInsightsService: AppInsightsService;

  constructor(appInsightsService: AppInsightsService) {}; 

}