import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@muega-services/event.service';
import { CalendarService } from '@muega-services/calendar.service';
import { SelectDateService } from '@muega-components/calendar/select-date.service';
import { Event } from '@muega-models/Event';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-events-daily-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.css'],
  providers: [EventService, CalendarService]
})

export class DailyViewComponent implements OnInit {

  calendars = new Map();
  events$: Observable<Event[]>;
  selectedDate: Date;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private calendarService: CalendarService,
    private ref: ChangeDetectorRef,
    selectDateService: SelectDateService
  ) {
    this.selectedDate = new Date();
    console.log('daily-view constructor', this.selectedDate);

    selectDateService.date$.subscribe(n => {
      this.selectedDate = n;
      console.log('selectedDate', this.selectedDate);
      this.loadEvents();
      this.ref.markForCheck();
    });
  }

  ngOnInit() {
    this.calendarService.getCalendars()
      .subscribe(calendars => {
        calendars.forEach(element => {
          this.calendars.set(element.name, element.color);
        });
        console.log('calendarMap:', this.calendars);

        this.loadEvents();
        this.ref.markForCheck();
      }
    );
  }

  loadEvents() {
    this.events$ = this.eventService.getEventsByDate(this.selectedDate);
  }

  getColor(calendarName) {
    return this.calendars.get(calendarName);
  }
}
