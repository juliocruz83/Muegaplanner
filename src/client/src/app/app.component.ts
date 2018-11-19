import { Component } from '@angular/core';
import { AuthenticationService } from '@muega-services/authentication.service';
import { WeatherWidgetComponent } from '@muega-components/weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: AuthenticationService) {}
}
