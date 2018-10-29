import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendar-ctrl',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-ctrl.component.html',
  styleUrls: ['./calendar-ctrl.component.css']
})
export class CalendarCtrlComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  constructor() {}

  ngOnInit() {
  }
}
