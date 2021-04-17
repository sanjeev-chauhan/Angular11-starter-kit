import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({ selector: 'app-payment', template: '<div></div>' })
class MockPaymentComponent {}

describe('AppComponent test', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), HttpClientTestingModule],
      declarations: [MockPaymentComponent, AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'ng-accelerator'`, () => {
    expect(app.title).toEqual('ng-accelerator');
  });
});
