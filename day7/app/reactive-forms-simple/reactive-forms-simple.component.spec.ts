import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsSimpleComponent } from './reactive-forms-simple.component';

describe('ReactiveFormsSimpleComponent', () => {
  let component: ReactiveFormsSimpleComponent;
  let fixture: ComponentFixture<ReactiveFormsSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
