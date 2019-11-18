import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemosComponent } from './subject-demos.component';

describe('SubjectDemosComponent', () => {
  let component: SubjectDemosComponent;
  let fixture: ComponentFixture<SubjectDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
