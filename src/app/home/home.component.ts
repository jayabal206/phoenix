import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta:Meta, title: Title) {
    title.setTitle('This is my Home page');
    meta.addTags([
      { name: 'author', content: 'imjayabal.com' },
      { name: 'keywords', content: 'angular seo course, angular basic tutorial, this is from youtube' },
      { name: 'description', content: 'This is my angular seo home page' }
    ]);
   }

  ngOnInit() {
  }

}
