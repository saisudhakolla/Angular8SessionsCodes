import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJSONAsyncComponent } from './read-jsonasync.component';

describe('ReadJSONAsyncComponent', () => {
  let component: ReadJSONAsyncComponent;
  let fixture: ComponentFixture<ReadJSONAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJSONAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJSONAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
