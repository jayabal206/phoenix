import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(meta:Meta, title: Title) {
    title.setTitle('This is my Contact page');
    meta.addTags([
      { name: 'author', content: 'Jayabal m' },
      { name: 'keywords', content: 'contact - jayabal' },
      { name: 'description', content: 'This is my angular seo contact page' }
    ]);
   }

  ngOnInit() {
  }

}
