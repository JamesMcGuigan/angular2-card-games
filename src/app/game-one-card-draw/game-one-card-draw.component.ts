import { Component, OnInit } from '@angular/core';
import { Card, Deck, decks } from 'cards';
import * as _                from 'lodash';

enum OneCardDrawPhase {
  Start,
  Deal,
  BetBlinds,
  Turn,
  BetTurn,
  Showdown,
}

@Component({
  selector: 'app-game-one-card-draw',
  templateUrl: './game-one-card-draw.component.html',
  styleUrls: ['./game-one-card-draw.component.less']
})
export class GameOneCardDrawComponent implements OnInit {

  deck:  Deck;
  cards: {
    dealer: Card,
    player: Card,
  };
  phase: OneCardDrawPhase;

  // export variables for template
  OneCardDrawPhase = OneCardDrawPhase;

  constructor() {
    this.phase = OneCardDrawPhase.Start;
  }

  ngOnInit() {
    this.deal();
  }

  deal() {
    this.deck = new decks.StandardDeck();
    this.deck.shuffleAll();
    this.cards = {
      dealer: _.first( this.deck.draw() ),
      player: _.first( this.deck.draw() ),
    };
    console.log('game-one-card-draw.component.ts:50:deal', 'this.cards', this.cards);
  }

}
