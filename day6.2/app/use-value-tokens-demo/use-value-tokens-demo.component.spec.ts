import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseValueTokensDemoComponent } from './use-value-tokens-demo.component';

describe('UseValueTokensDemoComponent', () => {
  let component: UseValueTokensDemoComponent;
  let fixture: ComponentFixture<UseValueTokensDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseValueTokensDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseValueTokensDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
