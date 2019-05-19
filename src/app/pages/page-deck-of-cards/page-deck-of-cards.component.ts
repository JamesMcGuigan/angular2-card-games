import { Component, ElementRef, OnInit } from '@angular/core';
import * as $                            from 'jquery';
import sample                            from 'lodash/sample';

// This is a demo of using npm deck-of-cards using a global script import
// angular.json: projects.angular2-card-games.architect.build.scripts = [ 'node_modules/deck-of-cards/dist/deck.js' ]
declare var Deck: any;  // Typescript definition for global namespace import


@Component({
  selector:    'app-page-deck-of-cards',
  templateUrl: './page-deck-of-cards.component.html',
  styleUrls:  ['./page-deck-of-cards.component.less']
})
export class PageDeckOfCardsComponent implements OnInit {
  deck = Deck();
  card = null;
  element;

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.element = {
      deck: $(this.el.nativeElement).find('.app-pages-deck-of-cards--deck'),
    };

    this.card = sample(this.deck.cards);
    this.card.mount( this.element.deck[0] );

    this.card.animateTo({
      duration: 0,
      x: this.element.deck.height() / 2,
      y: this.element.deck.width()  / 2
    });
    this.card.setSide('front');
  }

}
