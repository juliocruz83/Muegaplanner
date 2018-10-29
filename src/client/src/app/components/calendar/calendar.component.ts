import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable, of } from 'rxjs';
import { startOfDay, endOfDay } from 'date-fns';
import { Event } from '@muega-models/Event';
import { EventService } from '@muega-services/event.service';
import { CalendarService } from '@muega-services/calendar.service';
import { SelectDateService } from '@muega-components/calendar/select-date.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [EventService, CalendarService, SelectDateService]
})
export class CalendarComponent implements OnInit {

  calendars = new Map();

  view = 'month';
  viewDate: Date = new Date();
  events$: Observable<Array<Event>>;
  calendarEvents: CalendarEvent[] = [];
  clickedDate: Date;

  constructor(
    private dateService: SelectDateService,
    private eventService: EventService,
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.clickedDate = new Date();
    this.dateService.selectDate(this.clickedDate);
    this.loadCalendar();
  }

  loadCalendar() {
    this.calendarService.getCalendars().subscribe(calendars => {
        calendars.forEach(element => {
          this.calendars.set(element.name, element.color);
        });
        // console.log('calendarMap:', this.calendars);

        this.loadEventsAsync();
      });
  }

  loadEventsAsync() {
    this.events$ = this.eventService.getEvents();
  }

  getCalendarEvents(events: Event[]) {
    this.calendarEvents.splice(0);
    events.forEach(element => {
      this.addEvent(element);
    });
    return this.calendarEvents;
  }

  selectDate(date: Date) {
    console.log('selectDate', date);
    this.clickedDate = date;
    this.dateService.selectDate(this.clickedDate);
  }

  getColor(calendarName) {
    return this.calendars.get(calendarName);
  }

  addEvent(event): void {
    this.calendarEvents.push({
      title: event.name,
      start: startOfDay(event.startDateTime),
      end: endOfDay(event.endDateTime),
      color: { primary: this.getColor(event.calendar), secondary: this.getColor(event.calendar) },
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });

  }
}
