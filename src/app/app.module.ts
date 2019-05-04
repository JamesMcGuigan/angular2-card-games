import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {PageOneCardDrawComponent} from './page-one-card-draw/page-one-card-draw.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageOneCardDrawComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // OR: app-routing.module.ts: RouterModule.forRoot(routes, { useHash: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
