//imports use other modules
import { Component, OnInit } from '@angular/core';
import { MLabService } from '../../services/m-lab.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import 'rxjs/Rx';
//metadata, describe the component
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [MLabService,AuthenticationService]
})

//class define our component
export class BlogComponent implements OnInit {

  title = "Blog";
  latestPost = [ ];
  authenticated:boolean;
  mode = 'Observable';
  errorMessage: string;

  constructor(private mlabService: MLabService,private authentication: AuthenticationService) {
  }

  ngOnInit() {
   
    this.getRecentPost();
   }

  getRecentPost() {
    this.mlabService.getAllPost()
      .subscribe(
      posts => this.latestPost = posts,
      error => this.errorMessage = <any>error);
  }

  autthenticated()
  {
    this.authenticated=  this.authentication.isLogged()
  }

  readPost()
  {
     //go to read post component by id post // PostComponent
  }
}


