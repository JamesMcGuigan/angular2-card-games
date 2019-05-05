import {Component, ElementRef, OnInit} from '@angular/core';
import * as $ from 'jquery';
import sample from 'lodash/sample';

declare var Deck: any;

@Component({
  selector:    'app-page-one-card-draw',
  templateUrl: './page-one-card-draw.component.html',
  styleUrls:  ['./page-one-card-draw.component.less']
})
export class PageOneCardDrawComponent implements OnInit {
  deck = Deck();
  card = null;
  element;

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.element = {
      deck: $(this.el.nativeElement).find('.app-page-one-card-draw--deck'),
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
