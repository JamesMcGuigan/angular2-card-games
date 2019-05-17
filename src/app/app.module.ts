import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }                                     from './app-routing.module';
import { AppComponent }                                         from './app.component';
import { MenuComponent }                                        from './components/menu/menu.component';
import { PageDeckOfCardsComponent }                             from './pages/page-deck-of-cards/page-deck-of-cards.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CardComponent }                                        from './components/card/card.component';
import { PageHomeComponent }                                    from './pages/page-home/page-home.component';
import { GameOneCardDrawComponent }                             from './components/game-one-card-draw/game-one-card-draw.component';
import { FontAwesomeModule }                                    from '@fortawesome/angular-fontawesome';

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
    CommonModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // OR: app-routing.module.ts: RouterModule.forRoot(routes, { useHash: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
