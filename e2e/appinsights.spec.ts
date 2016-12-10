import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppInsightsComponent } from './appinsights.component';

describe('AppInsightsComponent (inline template)', () => {

  let comp:    AppInsightsComponent;
  let fixture: ComponentFixture<AppInsightsComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInsightsComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(AppInsightsComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });


  it('should always be true', () => {
      expect(true).toBe(true);
  });
});
