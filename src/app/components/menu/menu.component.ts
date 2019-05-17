import { Component, OnInit } from '@angular/core';
import { routes }            from '../../app-routing.module';
import { Routes }            from '@angular/router';
import * as _                from 'lodash';

@Component({
  selector:    'app-menu',
  templateUrl: './menu.component.html',
  styleUrls:  ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  routes: Routes;

  constructor() {
    // NOTE: It is cleaner to do filtering in javascript rather than using an ngIf
    this.routes = routes
      .filter((route) => !route.redirectTo )
      .filter((route) => !_.get(route, 'data.hidden') )
    ;
  }

  ngOnInit() {
  }
}
