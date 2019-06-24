import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  postList =[
    {
      title: "Post 1",
      content: "Content post 1",
      loveIts: 1,
      created_at: new Date()
    }, {
      title: "Post 2",
      content: "Content post 2",
      loveIts: 0,
      created_at: new Date()
    }, {
      title: "Post 3",
      content: "Content post 3",
      loveIts: 0,
      created_at: new Date()
    },

  ];
}
