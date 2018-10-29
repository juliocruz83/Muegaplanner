import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '@muega-models/User';
import { TokenPayload } from '@muega-models/TokenPayload';
import { environment } from '../../environments/environment';
import { AppConstants } from '../shared/AppConstants';


@Injectable()
export class AuthenticationService {
  private token: string;
  private tokenStorageKey = AppConstants.tokenStorageKey;
  domain = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenStorageKey, token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(this.tokenStorageKey);
    }
    return this.token;
  }

  public getUserDetails(): User {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(
    type: 'login'|'register',
    user?: TokenPayload): Observable<any> {

    const base = this.http.post(`${this.domain}/api/${type}`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('login', user);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem(this.tokenStorageKey);
    this.router.navigateByUrl('/');
  }
}
