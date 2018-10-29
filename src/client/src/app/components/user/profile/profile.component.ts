import { Component } from '@angular/core';
import { User } from '@muega-models/User';
import { UserProfileService } from '@muega-services/user-profile.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user$: Observable<User>;
  alert: string;

  constructor(private userProfileSvc: UserProfileService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.user$ = this.userProfileSvc.getProfile();
  }

  updateProfile(user: User) {
    this.alert = null;
    this.userProfileSvc.updateProfile(user)
    .subscribe(res => {
      this.alert = 'Your profile has been updated.';
    });
  }

  closeAlert() {
    this.alert = null;
  }
}
