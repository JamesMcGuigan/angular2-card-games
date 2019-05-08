import { Component, OnInit } from '@angular/core';
import { Card } from 'cards';
import 'cardsJS';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  card: Card;

  constructor( card: Card ) {
    this.card = card;
  }

  ngOnInit() {
  }

}
