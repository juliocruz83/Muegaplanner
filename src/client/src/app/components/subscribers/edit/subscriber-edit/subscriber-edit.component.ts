import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';
import { Observable, of } from 'rxjs';
import { Subscriber } from '@muega-models/Subscriber';
import { Calendar } from '@muega-models/Calendar';
import { SubscriberService } from '@muega-services/subscriber.service';
import { CalendarService } from '@muega-services/calendar.service';

@Component({
  selector: 'app-subscriber-edit',
  templateUrl: './subscriber-edit.component.html',
  styleUrls: ['./subscriber-edit.component.css'],
  providers: [SubscriberService, CalendarService]
})
export class SubscriberEditComponent implements OnInit {
  calendars: Calendar[];
  subscriberName;
  subscriber$: Observable<Subscriber>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subscriberService: SubscriberService,
    private calendarService: CalendarService
  ) { 
    this.route.params.subscribe(params => {      
      if (params['name']) { 
        this.subscriberName = params['name'];
        this.loadSubscriber();
      }

    });
  }

  ngOnInit() {    
  }

  loadSubscriber() {
    this.calendarService.getCalendars().subscribe(calendars => {        
        this.calendars = calendars;
        this.subscriber$ = this.subscriberService.getSubscriberByName(this.subscriberName);
      }
    );
  }

}
