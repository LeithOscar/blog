import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = "Blog";
  recentPost = [{
    title: 'Example title post 2',
    autor: 'Leith Oscar',
    date: '01/05=2017',
    topic: ['TypeScript', 'Angular2'],
    id: 1
  },
  {
    title: 'Example title post 2',
    autor: 'Leith Oscar',
    date: '01/05/2017',
    topic: ['TypeScript', 'Angular2'],
    id:2

  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
