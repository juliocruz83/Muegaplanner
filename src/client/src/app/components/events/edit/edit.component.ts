import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarService } from '@muega-services/calendar.service';
import { EventService } from '@muega-services/event.service';
import { SelectDateService } from '@muega-components/calendar/select-date.service';
import { Calendar } from '@muega-models/Calendar';
import { Event } from '@muega-models/Event';

@Component({
  selector: 'app-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EventService, CalendarService]
})
export class EditComponent implements OnInit {
  calendars: Calendar[];
  event: Event;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dateService: SelectDateService,
    private eventService: EventService,
    private calendarService: CalendarService,
    private ref: ChangeDetectorRef
  ) { 
    this.route.params.subscribe( params => this.event = params.id);
  }

  ngOnInit() {
    if(this.event != null) {
      this.eventService.getEvent(this.event).subscribe(event => {
        this.event = event;
        this.ref.markForCheck();
        console.log(this.event);
      });
    }
    else {
      this.event = new Event();
    }
    
    this.calendarService.getCalendars()
      .subscribe(calendars => {
        this.calendars = calendars;
      }
    );    
  }

  save() {
    if(this.event._id != null) {
      this.eventService.updateEvent(this.event)
        .subscribe(res => {
          console.log('updateEvent: ', res);
        }
      );
    } else {
      this.eventService.addEvent(this.event)
        .subscribe(res => {
          console.log('addEvent: ', res);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}

/*
 * TO-DO:
 * 7/3
 * Investigate how to refactor the getCalendar picklist functionality so we can reuse/how to move one level up?
 * We need to fix a bug on the datetimepicker tag that causes the placeholder to overlap with the date entered if focus is not moved to other input element
 */
