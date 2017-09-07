import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(meta:Meta, title: Title) {
    title.setTitle('This is my Accounts page');
    meta.addTags([
      { name: 'author', content: 'imjayabal.com' },
      { name: 'keywords', content: 'angular seo course, angular basic tutorial, this is from youtube' },
      { name: 'description', content: 'This is my angular seo home page' }
    ]);
   }

  ngOnInit() {
  }

}
