import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.contact-now').on('click', function(){
      $(this).parents('.banner-content__contact-box').slideUp();
      $(this).parents().find('.banner-content__contact-form').slideDown();
    });
  }

}
