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

  post = {
    commentsPost: []
  };
  editCommentZone = false;
  editPostZone = false;
  editCommentArea=""

  private sub: any;
  id: any;
  errorMessage = "internal error";

  ngOnInit() {

    this.getReadPost();

  }

  //private methods
  getReadPost() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.mlabService.getAllPost()
        .subscribe(
        posts => this.post = this.getItem(posts, this.id),
        error => this.errorMessage = <any>error);
    });
  }

  getItem(items: any, id: any): any {
    var results = items.filter(function (obj) { return obj._id.$oid === id; });
    return results[0];

  }

  editpost() {
    if (this.post != undefined && this.post != null) {
      this.editPostZone = true;
    }

  }
  closeEditPost() {

    this.editPostZone = false;
  }


  editComment(index: number) {

    let comment = this.post.commentsPost[index];
    if (comment != undefined && comment != null) {
      this.editCommentArea= comment.content;
      this.editCommentZone = true;
    }

  }
  closeEditComment() {

    this.editCommentZone = false;
  }

}
