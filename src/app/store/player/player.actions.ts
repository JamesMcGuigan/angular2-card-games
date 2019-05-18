// DOCS: https://medium.com/@nomanbinhussein/getting-started-with-ngrx-5cec2788b25f

import { Action } from '@ngrx/store';

export const BUY_CHIPS  = '[PLAYER] BUY_CHIPS';
export const WIN_CHIPS  = '[PLAYER] WIN_CHIPS';
export const LOSE_CHIPS = '[PLAYER] LOSE_CHIPS';

export class BuyChips implements Action {
  readonly type = BUY_CHIPS;
  constructor( public payload: number ) {}
}

export class WinChips implements Action {
  readonly type = WIN_CHIPS;
  constructor( public payload: number ) {}
}

export class LoseChips implements Action {
  readonly type = LOSE_CHIPS;
  constructor( public payload: number ) {}
}

export type All = BuyChips | WinChips | LoseChips;
