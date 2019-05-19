import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { GameOneCardDrawComponent } from './pages/game-one-card-draw/game-one-card-draw.component';
import { PageDeckOfCardsComponent } from './pages/page-deck-of-cards/page-deck-of-cards.component';
import { PageHomeComponent }        from './pages/page-home/page-home.component';

// NOTE: typescript (ng build) doesn't like dynamically generated objects
const routes: Routes = [
  { path: '',              redirectTo: '/one-card-draw',        pathMatch: 'full' },
  { path: '',              component: PageHomeComponent,        data: { title: 'Home' } },
  { path: 'deck-of-cards', component: PageDeckOfCardsComponent, data: { title: 'Deck of Cards Demo', hidden: false },  },
  { path: 'one-card-draw', component: GameOneCardDrawComponent, data: { title: 'One Card Draw',      hidden: false },  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export { routes };


