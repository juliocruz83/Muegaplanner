import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCtrlComponent } from './calendar-ctrl.component';

describe('CalendarCtrlComponent', () => {
  let component: CalendarCtrlComponent;
  let fixture: ComponentFixture<CalendarCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
