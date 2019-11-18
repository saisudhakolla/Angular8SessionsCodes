import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsAllControlsComponent } from './reactive-forms-all-controls.component';

describe('ReactiveFormsAllControlsComponent', () => {
  let component: ReactiveFormsAllControlsComponent;
  let fixture: ComponentFixture<ReactiveFormsAllControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsAllControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsAllControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
