import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(meta:Meta, title: Title) {
    title.setTitle('This is my Review page');
    meta.addTags([
      { name: 'author', content: 'Jayabal' },
      { name: 'keywords', content: 'jayabal-review, test' },
      { name: 'description', content: 'This is my angular seo review page' }
    ]);
   }

  ngOnInit() {
  }

}
