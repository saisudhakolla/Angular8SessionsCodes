import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntro1Component } from './rxjs-intro1.component';

describe('RxjsIntro1Component', () => {
  let component: RxjsIntro1Component;
  let fixture: ComponentFixture<RxjsIntro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsIntro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIntro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
