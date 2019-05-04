import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  links = [
    { url: 'one-card-draw', title: 'One Card Draw' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
