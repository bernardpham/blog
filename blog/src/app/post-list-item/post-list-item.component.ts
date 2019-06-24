import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() creationDate;
  @Input() numberLike;

  constructor() { }

  ngOnInit() {
  }

  increment(){
    
    this.numberLike++;
  }

  decrement(){
    
    this.numberLike--;
  }
}
