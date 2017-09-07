import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {

  constructor(meta:Meta, title: Title) {
    title.setTitle('This is my GST page');
    meta.addTags([
      { name: 'author', content: 'test' },
      { name: 'keywords', content: 'GST, test' },
      { name: 'description', content: 'This is my angular seo GST page' }
    ]);
   }

  ngOnInit() {
  }

}
