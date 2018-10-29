import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calendar } from '@muega-models/Calendar';

@Injectable()
export class CalendarService {
  domain = 'http://localhost:3000';
  calendars = new Map();

  constructor(private http: HttpClient) {
  }

  getCalendars() {
    return this.http.get<Calendar[]>(`${this.domain}/api/calendars`);
  }

  addCalendar(newCalendar: Calendar) {
    return this.http.post<Calendar>(`${this.domain}/api/calendars`, newCalendar);
  }

  deleteCalendar(id) {
    return this.http.delete<Calendar>(`${this.domain}/api/calendars/${id}`);
  }

  updateCalendar(newCalendar) {
    return this.http.put<Calendar>(`${this.domain}/api/calendars/${newCalendar._id}`, newCalendar);
  }
}
