import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormswithDirectivesComponent } from './reactive-formswith-directives.component';

describe('ReactiveFormswithDirectivesComponent', () => {
  let component: ReactiveFormswithDirectivesComponent;
  let fixture: ComponentFixture<ReactiveFormswithDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormswithDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormswithDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
