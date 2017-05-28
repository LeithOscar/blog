import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AlertService, UserService]
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  login() {

    this.loading = true;
    this.userService.getById(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        localStorage.setItem('currentUser', JSON.stringify(data.username));
        localStorage.setItem('current$oid', JSON.stringify(data._id.$oid));
        this.alertService.success('login successful', true);
        this.router.navigate(['.']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
