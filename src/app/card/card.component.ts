import { Component, Input, OnInit } from '@angular/core';
import { Card }                     from 'cards';
import 'cardsJS';
import * as _                       from 'lodash';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() faceDown: boolean;

  symbol: string;
  title:  string;

  constructor() {
  }

  ngOnInit() {
    // NOTE: @Input() variables are not visible in constructor, only after ngOnInit()
    this.symbol = this.card.rank.shortName + this.card.suit.name[0].toUpperCase();
    this.title  = `${this.card.rank.longName} of ${_.capitalize(this.card.suit.name)}`;
  }

}
