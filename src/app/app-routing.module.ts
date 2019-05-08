import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeckOfCardsComponent } from './page-deck-of-cards/page-deck-of-cards.component';
import _ from 'lodash';

const menu: Array<{ path: string, title: string, hidden: boolean }> =
  [
    { path: '',              title: 'Home' },
    { path: 'deck-of-cards', title: 'Deck of Cards Demo', component: PageDeckOfCardsComponent, hidden: false }
  ]
  .map((item) => ({ hidden: false, ...item }))
;

const routes: Routes = _(menu)
  .filter((item) => _.has(item, 'component'))
  .map((item)    => _.pick(item, ['path', 'component']) )
  .value()
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export { menu, routes };


