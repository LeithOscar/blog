import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {

  title = 'Welcome to Newpol connect!';
  userName = ""
  constructor(private authentication: AuthenticationService) {

    if (authentication.isLogged()) {
      this.userName = localStorage.getItem('currentUser');
    }
  }

  logout() { 
    this.authentication.logout();
  }
}


