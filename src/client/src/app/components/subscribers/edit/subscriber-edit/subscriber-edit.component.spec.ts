import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberEditComponent } from './subscriber-edit.component';

describe('SubscriberEditComponent', () => {
  let component: SubscriberEditComponent;
  let fixture: ComponentFixture<SubscriberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
