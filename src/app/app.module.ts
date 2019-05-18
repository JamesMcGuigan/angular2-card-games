import { BrowserModule }                                        from '@angular/platform-browser';
import { NgModule }                                             from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FontAwesomeModule }                                    from '@fortawesome/angular-fontawesome';
import { StoreModule }                                          from '@ngrx/store';
import { EffectsModule }                                        from '@ngrx/effects';
import { StoreDevtoolsModule }                                  from '@ngrx/store-devtools';
import { AppRoutingModule }                                     from './app-routing.module';
import { AppComponent }                                         from './app.component';
import { MenuComponent }            from './components/menu/menu.component';
import { PageDeckOfCardsComponent } from './pages/page-deck-of-cards/page-deck-of-cards.component';
import { CardComponent }            from './components/card/card.component';
import { PageHomeComponent }        from './pages/page-home/page-home.component';
import { GameOneCardDrawComponent } from './components/game-one-card-draw/game-one-card-draw.component';
import { metaReducers, reducers }   from './store/reducers';

import { environment } from '../environments/environment';
import { AppEffects }  from './store/app.effects';

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
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // OR: app-routing.module.ts: RouterModule.forRoot(routes, { useHash: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
