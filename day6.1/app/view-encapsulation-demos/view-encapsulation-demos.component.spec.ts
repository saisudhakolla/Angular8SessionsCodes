import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationDemosComponent } from './view-encapsulation-demos.component';

describe('ViewEncapsulationDemosComponent', () => {
  let component: ViewEncapsulationDemosComponent;
  let fixture: ComponentFixture<ViewEncapsulationDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
