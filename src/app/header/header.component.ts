import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    // $('.dropdown').on('mouseover', function(){
    //   $(this).toggleClass('open');
    // });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".header-nav").addClass("fixed");
        } else {
            $(".header-nav").removeClass("fixed");
        }
    });
    
  }

  

}
