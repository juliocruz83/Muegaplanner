import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberEditCalendarsComponent } from './subscriber-edit-calendars.component';

describe('SubscriberEditCalendarsComponent', () => {
  let component: SubscriberEditCalendarsComponent;
  let fixture: ComponentFixture<SubscriberEditCalendarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberEditCalendarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberEditCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
