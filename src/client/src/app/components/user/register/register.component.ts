import { Component } from '@angular/core';
import { AuthenticationService } from '@muega-services/authentication.service';
import { Router } from '@angular/router';
import { TokenPayload } from '@muega-models/TokenPayload';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
