import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Calendar } from '@muega-models/Calendar';
import { CalendarService } from '@muega-services/calendar.service';
import { UserProfileService } from '@muega-services/user-profile.service';
import { User } from '@muega-models/User';
import { UserCalendar } from '@muega-models/UserCalendar';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css'],
  providers: [ CalendarService ]
})
export class CalendarsComponent implements OnInit {

  calendars$: Observable<Array<Calendar>>;
  userProfile$: Observable<User>;
  newCalendar: Calendar = new Calendar();
  newCalendarVisible: boolean;
  editId;

  constructor(
    private calendarService: CalendarService,
    private userProfileService: UserProfileService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadCalendars();
    this.userProfile$ = this.userProfileService.getProfile();
  }

  loadCalendars() {
    this.calendars$ = this.calendarService.getCalendars();
  }

  showNewCalendarCtrls() {
    this.newCalendar = { name: '', color: '#FFFFFF' };
    this.newCalendarVisible = true;
  }

  delete(id) {
    console.log('delete', id);
    this.calendarService.deleteCalendar(id)
      .subscribe(res => {
        console.log(res);
        this.loadCalendars();
      });
  }

  showEdit(id) {
    this.editId = id;
  }

  cancelEdit() {
    this.editId = null;
    this.loadCalendars();
  }

  saveEdit(calendar: Calendar) {
    console.log('edit', calendar);
    this.calendarService.updateCalendar(calendar)
      .subscribe(res => {
        console.log(res);
        this.loadCalendars();
        this.editId = null;
      });
  }

  cancelClick() {
    this.newCalendarVisible = false;
  }

  saveClick() {
    console.log('newCalendar', this.newCalendar);
    this.calendarService.addCalendar(this.newCalendar)
      .subscribe(res => {
        console.log(res);
        this.loadCalendars();
      });
      this.newCalendarVisible = false;
  }

  isSubscribedToCalendar(userProfile: User, calendarName: string) {
    const index = this.findCalendar(userProfile.calendars, calendarName);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  isDefault(userProfile: User, calendarName: string) {
    const index = this.findCalendar(userProfile.calendars, calendarName);
    if (index > -1) {
      console.log(userProfile.calendars[index].default);
      return userProfile.calendars[index].default;
    }
    return false;
  }

  getCalendarsColor(userProfile: User, calendar: Calendar) {
    const index = this.findCalendar(userProfile.calendars, calendar.name);
    if (index > -1) {
      return userProfile.calendars[index].color;
    } else {
      // return calendar's color if not subscribed
      return calendar.color;
    }
  }

  findCalendar(calendars: Array<UserCalendar>, calendarName) {
    for (let index = 0; index < calendars.length; index++) {
      if (calendarName === calendars[index].name) {
        return index;
      }
    }
    return -1;
  }

  onSubscribeCheckChanged(event, userProfile: User, calendar: Calendar) {
    if (event.checked) {
      const userCalendar = new UserCalendar();
      userCalendar.name = calendar.name;
      userCalendar.color = calendar.color;
      userCalendar.default = false;
      userProfile.calendars.push(userCalendar);
    } else {
      const index = this.findCalendar(userProfile.calendars, calendar.name);
      userProfile.calendars.splice(index, 1);
    }

    this.userProfileService.updateCalendars(userProfile.calendars)
      .subscribe(res => {
        console.log(res);
      });
  }

  onCalendarColorChanged(newColor, userProfile: User, calendar: Calendar) {
    const index = this.findCalendar(userProfile.calendars, calendar.name);
    userProfile.calendars[index].color = newColor;

    this.userProfileService.updateCalendars(userProfile.calendars)
      .subscribe(res => {
        console.log(res);
      });
  }

  onDefaultChanged(event, userProfile: User, calendar: Calendar) {
    const index = this.findCalendar(userProfile.calendars, calendar.name);
    for (let i = 0; i < userProfile.calendars.length; i++) {
      userProfile.calendars[i].default = false;
    }
    userProfile.calendars[index].default = event.source._checked;

    this.userProfileService.updateCalendars(userProfile.calendars)
      .subscribe(res => {
        console.log(res);
      });
  }
}
