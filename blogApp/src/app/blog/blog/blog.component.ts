//imports use other modules
import { Component, OnInit } from '@angular/core';

//metadata, describe the component
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

//class define our component
export class BlogComponent  implements OnInit {

  recentPost = [
    {
      postId:'1',
      title:'First post',
      autor:'leith',
      date :'01/03/2017',
      topics:[
        'angular 2',
        'typeScript'
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}


/*all views must be a comopnent associated*/