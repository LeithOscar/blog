//imports use other modules
import { Component, OnInit } from '@angular/core';
import { MLabService } from '../../m-lab.service';

import 'rxjs/Rx';

//metadata, describe the component
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [MLabService]
})

//class define our component
export class BlogComponent implements OnInit {

  title = "Blog";
  recentPost = [ ];

  latestPost= [];
  mode = 'Observable';
  errorMessage: string;

  constructor(private mlabService: MLabService) {
  }

  ngOnInit() { this.getRecentPost(); }

  getRecentPost() {
    this.mlabService.getAllPost()
      .subscribe(
      posts => this.recentPost = posts,
      error => this.errorMessage = <any>error);
  }


}


/*all views must be a comopnent associated*/