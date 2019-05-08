import { Component, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';
import { Routes } from '@angular/router';

@Component({
  selector:    'app-menu',
  templateUrl: './menu.component.html',
  styleUrls:  ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  routes: Routes;

  constructor() {
    this.routes = routes;
  }

  ngOnInit() {
  }
}
