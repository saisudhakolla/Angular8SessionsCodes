import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsSimpleComponent } from './template-forms-simple.component';

describe('TemplateFormsSimpleComponent', () => {
  let component: TemplateFormsSimpleComponent;
  let fixture: ComponentFixture<TemplateFormsSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormsSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
