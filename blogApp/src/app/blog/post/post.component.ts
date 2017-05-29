import { Component, OnInit } from '@angular/core';
import { MLabService } from '../../services/m-lab.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [MLabService,AuthenticationService]
})
export class PostComponent implements OnInit {

  constructor(private mlabService: MLabService, private route: ActivatedRoute,private authentication: AuthenticationService) { }

  post = {
    commentsPost: [],
    fullContent: "",
    content: ""
  };

  editPostZone = false;
  editPostArea = ""
  editCommentZone = false;
  editCommentArea = ""
  id: any;
  postId: number;
  authenticated:boolean;
  newCommentContent = "";
  errorMessage = "internal error";

  ngOnInit() {
    this.autthenticated();
    this.getReadPost();

  }

  //private methods
  getReadPost() {
    this.route.params.subscribe(params => {
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

  /* POST*/
  editpost() {
    if (this.post != undefined && this.post != null) {
      this.editPostZone = true;
      this.editPostArea = this.post.fullContent;
    }

  }
  closeEditPost() {
    this.editPostZone = false;
  }

  savePost() {
    this.post.fullContent = this.editPostArea;
    this.save();
    this.closeEditPost();
  }

  finishEditionPost() {
    this.post.fullContent = this.editPostArea;
    this.post.content = this.editPostArea;
    this.editPostZone = false;

  }



  /* POST COMMENTS*/
  editComment(index: number) {

    this.postId = index;
    if (this.post != undefined && this.post.commentsPost != undefined) {
      let comment = this.post.commentsPost[index];
      if (comment != undefined && comment != null) {
        this.editCommentArea = comment.content;
        this.editCommentZone = true;
      }
    }

  }
  closeEditComment() {

    this.editCommentZone = false;

  }
  finishEditionComment() {

    this.post.commentsPost[this.postId].content = this.editCommentArea;
    this.editCommentZone = false;

    this.save();
  }


  /*Add new comments to Post */
  addNewComment() {
    let newCommentId = this.post.commentsPost.length + 1;
    let newItem = {
      id: newCommentId,
      content: this.newCommentContent,
      date: new Date().toJSON().slice(0, 10).replace('/-/g', '/')
    };

    this.post.commentsPost.push(newItem);
    this.save();

  }

  /* Commen methods */
  save() {
    this.mlabService.updatePost(this.post).subscribe(
      posts => this.closeEditComment(),
      error => this.errorMessage = <any>error);

  }

    autthenticated()
  {
    this.authenticated=  this.authentication.isLogged()
  }
}
