import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule }                                             from '@angular/core';
import { BrowserModule }                                        from '@angular/platform-browser';
import { FontAwesomeModule }                                    from '@fortawesome/angular-fontawesome';
import { EffectsModule }                                        from '@ngrx/effects';
import { StoreModule }                                          from '@ngrx/store';
import { StoreDevtoolsModule }                                  from '@ngrx/store-devtools';
import { environment }                                          from '../environments/environment';
import { AppRoutingModule }                                     from './app-routing.module';
import { AppComponent }                                         from './app.component';
import { CardComponent }                                        from './components/card/card.component';
import { MenuComponent }                                        from './components/menu/menu.component';
import { UserChipStatsComponent }                               from './components/user-chip-stats/user-chip-stats.component';
import { GameOneCardDrawComponent }                             from './pages/game-one-card-draw/game-one-card-draw.component';
import { PageDeckOfCardsComponent }                             from './pages/page-deck-of-cards/page-deck-of-cards.component';
import { PageHomeComponent }                                    from './pages/page-home/page-home.component';
import { AppEffects }                                           from './store/app.effects';
import { metaReducers, reducers }                               from './store/reducers';
// import { library }                                           from '@fortawesome/fontawesome-svg-core';
// import { far }                                               from '@fortawesome/pro-regular-svg-icons';
// import { fas }                                               from '@fortawesome/pro-solid-svg-icons';
// import { fal }                                               from '@fortawesome/pro-light-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageDeckOfCardsComponent,
    CardComponent,
    PageHomeComponent,
    GameOneCardDrawComponent,
    UserChipStatsComponent,
  ],
  imports:      [
    CommonModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([ AppEffects ]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers:    [
    {provide: LocationStrategy, useClass: HashLocationStrategy}  // OR: app-routing.module.ts: RouterModule.forRoot(routes, { useHash: true }),
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor() {
    // library.add(far, fas, fal); // Adds 3 MB to dist codebase
  }
}
