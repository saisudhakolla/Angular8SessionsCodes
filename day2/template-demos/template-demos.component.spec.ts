import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDemosComponent } from './template-demos.component';

describe('TemplateDemosComponent', () => {
  let component: TemplateDemosComponent;
  let fixture: ComponentFixture<TemplateDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
