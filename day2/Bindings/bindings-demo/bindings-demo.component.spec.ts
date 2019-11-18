import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsDemoComponent } from './bindings-demo.component';

describe('BindingsDemoComponent', () => {
  let component: BindingsDemoComponent;
  let fixture: ComponentFixture<BindingsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
