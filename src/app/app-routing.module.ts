import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeckOfCardsComponent } from './page-deck-of-cards/page-deck-of-cards.component';
import { PageHomeComponent } from './page-home/page-home.component';

// NOTE: typescript (ng build) doesn't like dynamically generated objects
const routes: Routes = [
  { path: '',              component: PageHomeComponent, data: { title: 'Home' } },
  { path: 'deck-of-cards', component: PageDeckOfCardsComponent, data: { title: 'Deck of Cards Demo', hidden: true },  }
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


