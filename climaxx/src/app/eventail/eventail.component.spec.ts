import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventailComponent } from './eventail.component';

describe('EventailComponent', () => {
  let component: EventailComponent;
  let fixture: ComponentFixture<EventailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
