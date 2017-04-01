import { Component, OnInit } from '@angular/core';
import { MLabService } from '../../m-lab.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [MLabService]
})
export class PostComponent implements OnInit {

  constructor(private mlabService: MLabService, private route: ActivatedRoute) { }

  post = {};
  private sub: any;
  id: number;
  errorMessage = "internal error";

  ngOnInit() {

    this.getReadPost();
  }


  //private methods
  getReadPost() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.mlabService.getById(this.id)
        .subscribe(
        posts => this.post = posts[0],
        error => this.errorMessage = <any>error);
    });


  }

}
