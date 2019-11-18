import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJSONComponent } from './read-json.component';

describe('ReadJSONComponent', () => {
  let component: ReadJSONComponent;
  let fixture: ComponentFixture<ReadJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
