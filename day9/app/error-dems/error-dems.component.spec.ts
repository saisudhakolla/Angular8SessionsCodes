import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDemsComponent } from './error-dems.component';

describe('ErrorDemsComponent', () => {
  let component: ErrorDemsComponent;
  let fixture: ComponentFixture<ErrorDemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorDemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
