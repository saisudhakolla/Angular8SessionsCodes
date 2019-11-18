import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntro2Component } from './rxjs-intro2.component';

describe('RxjsIntro2Component', () => {
  let component: RxjsIntro2Component;
  let fixture: ComponentFixture<RxjsIntro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsIntro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIntro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
