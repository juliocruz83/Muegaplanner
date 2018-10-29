import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { SubscribersComponent } from '@muega-components/subscribers/subscribers.component';
import { CalendarComponent } from '@muega-components/calendar/calendar.component';
import { CalendarsComponent } from '@muega-components/calendars/calendars.component';
import { ProfileComponent } from '@muega-components/user/profile/profile.component';
import { LoginComponent } from '@muega-components/user/login/login.component';
import { RegisterComponent } from '@muega-components/user/register/register.component';
import { AuthenticationService } from '@muega-services/authentication.service';
import { CalendarCtrlComponent } from '@muega-components/calendar/calendar-ctrl/calendar-ctrl.component';
import { AuthGuardService } from '@muega-services/auth-guard.service';
import { AuthInterceptor } from '@muega-services/auth-interceptor';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendars', component: CalendarsComponent, canActivate: [AuthGuardService]  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {
    path: '', component: CalendarComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: '../app/components/events/events.module#EventsModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SubscribersComponent,
    CalendarComponent,
    CalendarCtrlComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    CalendarsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    NgbAlertModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    ColorPickerModule
  ],
  exports: [ MaterialModule, CommonModule, BrowserAnimationsModule ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
