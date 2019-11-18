import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PArent2Component } from './parent2.component';

describe('PArent2Component', () => {
  let component: PArent2Component;
  let fixture: ComponentFixture<PArent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PArent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PArent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
