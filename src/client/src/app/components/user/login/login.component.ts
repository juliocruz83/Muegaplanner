import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayload } from '@muega-models/TokenPayload';
import { AuthenticationService } from '@muega-services/authentication.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
    });
  }

  validForm () {
    if (this.credentials.email && this.credentials.password) {
      return true;
    } else {
      return false;
    }
  }
}
