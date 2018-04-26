import { Component, OnInit } from '@angular/core';

declare var $: any; // declare

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // -----------
  setActive(menu) {
    $('li').removeClass();
    $('#' + menu).addClass('active');
  } // -----

}
