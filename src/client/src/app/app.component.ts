import { Component } from '@angular/core';
import { AuthenticationService } from '@muega-services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: AuthenticationService) {}
}
