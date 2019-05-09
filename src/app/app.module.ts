import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }                       from './app-routing.module';
import { AppComponent }                           from './app.component';
import { MenuComponent }                          from './menu/menu.component';
import { PageDeckOfCardsComponent }               from './page-deck-of-cards/page-deck-of-cards.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CardComponent }                          from './card/card.component';
import { PageHomeComponent }                      from './page-home/page-home.component';
import { GameOneCardDrawComponent }               from './game-one-card-draw/game-one-card-draw.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageDeckOfCardsComponent,
    CardComponent,
    PageHomeComponent,
    GameOneCardDrawComponent,
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
