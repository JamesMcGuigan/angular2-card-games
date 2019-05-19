import { Component, OnInit } from '@angular/core';
import { faSync }            from '@fortawesome/free-solid-svg-icons';
import { Card, Deck, decks } from 'cards';
import * as _                from 'lodash';


enum OneCardDrawAction {
  Restart,
  Deal,
  Fold,
  Bet,
  Raise,
  Call,
}

enum OneCardDrawPhase {
  Empty,
  Deal,
  Showdown,
  Reveal,
}

enum OneCardDrawResult {
  DealerWins,
  PlayerWins,
  SplitPot
}

@Component({
  selector: 'app-game-one-card-draw',
  templateUrl: './game-one-card-draw.component.html',
  styleUrls: ['./game-one-card-draw.component.less']
})
export class GameOneCardDrawComponent implements OnInit {

  state: {
    chips: number,
    pot:   number,
    deck:  Deck,
    messages: Array<string>,
    cards: {
      dealer: Card,
      player: Card,
    };
    phase: OneCardDrawPhase;
  } = {
    pot:   0,
    chips: 10,
    messages: [],
    deck:  new decks.StandardDeck(),
    phase: OneCardDrawPhase.Empty,
    cards: {
      dealer: null,
      player: null,
    }
  };

  // export variables for template
  OneCardDrawPhase  = OneCardDrawPhase;
  OneCardDrawAction = OneCardDrawAction;
  faSync            = faSync;


  constructor() {
  }

  ngOnInit() {
    this.state.deck.shuffleAll();
    this.dealerAction(OneCardDrawAction.Restart);
  }


  getBetSize( action: OneCardDrawAction ) {
    let bet = 0;
    switch( action ) {
      case OneCardDrawAction.Call:  bet = 0; break;
      case OneCardDrawAction.Deal:  bet = 1; break;
      case OneCardDrawAction.Bet:   bet = 1; break;
      case OneCardDrawAction.Raise: bet = 2; break;
    }
    return bet;
  }

  cardSymbol( card: Card ) {
    if( card ) {
      return card.rank.shortName + card.suit.name[0].toUpperCase();
    } else {
      return '';
    }
  }

  cardValue( card: Card ) {
    switch( card.rank.shortName ) {
      case 'T': return 10;
      case 'J': return 11;
      case 'Q': return 12;
      case 'K': return 13;
      case 'A': return 14;
      default:  return parseInt(card.rank.shortName, 10);
    }
  }

  evaluateHand( dealerCard: Card, playerCard: Card ): OneCardDrawResult {
    const dealerCardValue = this.cardValue(dealerCard);
    const playerCardValue = this.cardValue(playerCard);

    if( dealerCardValue === playerCardValue ) {
      return OneCardDrawResult.SplitPot;
    }
    else if( dealerCardValue < playerCardValue ) {
      return OneCardDrawResult.PlayerWins;
    } else {
      return OneCardDrawResult.DealerWins;
    }
  }

  action( action: OneCardDrawAction ) {
    console.log('action', 'this.state.phase, action', OneCardDrawPhase[this.state.phase], OneCardDrawAction[action]);
    this.playerAction(action);
    this.dealerAction(action);
  }

  playerAction( action: OneCardDrawAction ) {
    if( this.state.phase === OneCardDrawPhase.Empty ) {
      if( action === OneCardDrawAction.Deal ) {
        this.state = {
          ...this.state,
          pot:   this.state.pot   + 2,
          chips: this.state.chips - 1,
          messages: [
            ...this.state.messages,
            'Player: Bet 1 chip as blinds'
          ]
        };
        return;
      }
    }

    else if( this.state.phase === OneCardDrawPhase.Deal ) {
      switch( action ) {
        case OneCardDrawAction.Fold:
          this.state = {
            ...this.state,
            phase: OneCardDrawPhase.Empty,
            messages: [
              ...this.state.messages,
              'Player: Folds'
            ],
            cards: {
              dealer: null,
              player: null,
            }
          };
          break;

        case OneCardDrawAction.Bet:
        case OneCardDrawAction.Raise:
        case OneCardDrawAction.Call:
          const bet  = this.getBetSize(action);

          this.state = {
            ...this.state,
            messages: [
              ...this.state.messages,
              `Player: ${_.capitalize(OneCardDrawAction[action])}s with ${bet} chips`
            ],
            pot:   this.state.pot   + bet,
            chips: this.state.chips - bet
          };
      }
    }

    else if( this.state.phase === OneCardDrawPhase.Showdown ) {
      if( action === OneCardDrawAction.Call ) {
      }
    }

    else if( this.state.phase === OneCardDrawPhase.Reveal ) {
    }
  }

  dealerAction( action: OneCardDrawAction ) {
    console.log('dealerAction', 'this.state.phase, action', OneCardDrawPhase[this.state.phase], OneCardDrawAction[action]);

    if( action === OneCardDrawAction.Restart ) {
      this.state = {
        ...this.state,
        phase: OneCardDrawPhase.Empty,
        messages: [
          'Dealer: New Round'
        ],
        pot:   0,
        cards: {
          dealer: null,
          player: null,
        }
      };
      return;
    }

    else if( this.state.phase === OneCardDrawPhase.Empty ) {
      if( action === OneCardDrawAction.Deal ) {
        if( this.state.deck.remainingLength <=2 ) {
          this.state.deck.shuffleDeckAndDiscard();
          this.state.messages = [
            ...this.state.messages,
            `Dealer: Shuffling Deck`
          ];
        }

        this.state.phase = OneCardDrawPhase.Deal;
        this.state.cards = {
          dealer: _.first( this.state.deck.drawToDiscard() ),
          player: _.first( this.state.deck.drawToDiscard() ),
        };
        this.state.messages = [
          ...this.state.messages,
          `Dealer: Deals to the Board: [${this.cardSymbol(this.state.cards.player)}]`
        ];
      }
    }

    // Initial Logic: Dealer always matches player bet
    else if( this.state.phase === OneCardDrawPhase.Deal ) {
      // noinspection FallThroughInSwitchStatementJS
      switch( action ) {
        case OneCardDrawAction.Fold:
          this.state = {
            ...this.state,
            messages: [
              ...this.state.messages,
              `Dealer: Shows [${this.cardSymbol(this.state.cards.dealer)}]`
            ],
            phase:    OneCardDrawPhase.Showdown,
            pot:      0
          };
          break;

        case OneCardDrawAction.Bet:
        case OneCardDrawAction.Raise:
        case OneCardDrawAction.Call:
          const bet  = this.getBetSize(action);
          this.state = {
            ...this.state,
            messages: [
              ...this.state.messages,
              `Dealer: Calls with ${bet} chips`
            ],
            phase:    OneCardDrawPhase.Showdown,
            pot:      this.state.pot + bet
          };
          break;
      }
    }

    else if( this.state.phase === OneCardDrawPhase.Showdown ) {
      if ( action === OneCardDrawAction.Call ) {
        const result = this.evaluateHand(this.state.cards.dealer, this.state.cards.player);
        switch ( result ) {
          case OneCardDrawResult.PlayerWins:
            this.state = {
              ...this.state,
              pot:      0,
              chips:    this.state.chips + this.state.pot,
              messages: [
                ...this.state.messages,
                `Dealer: Player wins ${this.state.pot} chips with [${this.cardSymbol(this.state.cards.player)}]`
              ]
            };
            break;

          case OneCardDrawResult.SplitPot:
            this.state = {
              ...this.state,
              pot:      0,
              chips:    this.state.chips + this.state.pot / 2,
              messages: [
                ...this.state.messages,
                `Dealer: Player splits pot and wins ${this.state.pot / 2} chips with [${this.cardSymbol(this.state.cards.player)}]`
              ]
            };
            break;

          case OneCardDrawResult.DealerWins:
            this.state = {
              ...this.state,
              pot:      0,
              messages: [
                ...this.state.messages,
                `Dealer: Please loses to [${this.cardSymbol(this.state.cards.dealer)}]`
              ]
            };
            break;
        }
        this.state.phase = OneCardDrawPhase.Reveal;
      }
    }
  }

}
