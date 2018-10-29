import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '@muega-services/subscriber.service';
import { CalendarService } from '@muega-services/calendar.service';
import { Subscriber } from '@muega-models/Subscriber';
import { Calendar } from '@muega-models/Calendar';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
  providers: [SubscriberService, CalendarService ]
})

export class SubscribersComponent implements OnInit {
  calendars: Calendar[];
  subscribers: Subscriber[];
  selSubscriber: Subscriber[];

  constructor(
    private subscriberService: SubscriberService,
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.calendarService.getCalendars()
      .subscribe(calendars => {
        this.calendars = calendars;
        this.loadSubscribers();
      }
    );
  }

  loadSubscribers() {
    this.subscriberService.getSubscribers().subscribe(subscribers => {
      console.log(subscribers);
      this.subscribers = subscribers;
      console.log(this.subscribers);
    });
  }

  getCalendarColor(calendar) {
    for (let i = 0; i < this.calendars.length; i++) {
      if (this.calendars[i].name === calendar) {
        return this.calendars[i].color;
      }
    }
  }

}
