import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@muega-models/User';
import { UserCalendar } from '@muega-models/UserCalendar';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  domain = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getProfile(): Observable<any> {
    return this.httpClient.get(`${this.domain}/api/profile`);
  }

  public updateProfile(user: User) {
    return this.httpClient.post<User>(`${this.domain}/api/profile`, user);
  }

  public updateCalendars(calendars: Array<UserCalendar>) {
    return this.httpClient.post<Array<UserCalendar>>(`${this.domain}/api/profile/calendars`, calendars);
  }

  public resetPassword(newPassword: string) {
    return this.httpClient.post(`${this.domain}/api/profile/calendars`, { password: newPassword });
  }
}
