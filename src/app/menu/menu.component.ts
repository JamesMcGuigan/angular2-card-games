import { Component, OnInit } from '@angular/core';
import { menu } from '../app-routing.module';

@Component({
  selector:    'app-menu',
  templateUrl: './menu.component.html',
  styleUrls:  ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  menu: Array<{ path: string, title: string, hidden: boolean }>;  // TODO: create global Typescript type

  constructor() {
    this.menu = menu;
  }

  ngOnInit() {
  }
}
