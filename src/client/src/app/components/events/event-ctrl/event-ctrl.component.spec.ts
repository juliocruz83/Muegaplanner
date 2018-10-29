import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCtrlComponent } from './event-ctrl.component';

describe('EventCtrlComponent', () => {
  let component: EventCtrlComponent;
  let fixture: ComponentFixture<EventCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
