import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryDemosComponent } from './use-factory-demos.component';

describe('UseFactoryDemosComponent', () => {
  let component: UseFactoryDemosComponent;
  let fixture: ComponentFixture<UseFactoryDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseFactoryDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFactoryDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
