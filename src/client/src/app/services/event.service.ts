import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '@muega-models/Event';

@Injectable()
export class EventService {
  domain = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getEvent(id) {
    return this.http.get<Event>(`${this.domain}/api/events/${id}`);
  }

  getEvents() {
    return this.http.get<Event[]>(`${this.domain}/api/events`);
  }

  getEventsByDate(date: Date) {
    return this.http.get<Event[]>(`${this.domain}/api/events/date/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`); 
  }

  addEvent(newEvent: Event) {
    return this.http.post<Event>(`${this.domain}/api/events`, newEvent);
  }

  deleteEvent(id) {
    return this.http.delete<Event>(`${this.domain}/api/events/${id}`);
  }

  updateEvent(newEvent: Event) {
    return this.http.put<Event>(`${this.domain}/api/events/${newEvent._id}`, newEvent);
  }
}
