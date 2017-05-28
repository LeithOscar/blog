import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../services/index';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [AlertService, UserService]
})

export class RegisterComponent implements OnInit {


    ngOnInit() {
    }

    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                localStorage.setItem('currentUser', JSON.stringify(data.username));
                localStorage.setItem('current$oid', JSON.stringify(data._id.$oid));
                this.alertService.success('Registration successful', true);
                this.router.navigate(['.']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}



