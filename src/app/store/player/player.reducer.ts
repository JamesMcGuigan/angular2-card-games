import * as PlayerActions                     from './player.actions';
import Player                                 from './player.model';
import { initializePlayerState, PlayerState } from './player.state';

export type Action = PlayerActions.All;


export function PlayerReducer(state = initializePlayerState(), action: Action): PlayerState {
  console.log(state, action);

  switch (action.type) {

    case PlayerActions.BUY_CHIPS:
      return {
        ...state,
        chips: state.chips += action.payload,
        stats: {
          ...state.stats,
          purchased: state.stats.purchased += action.payload,
        }
      };

    case PlayerActions.WIN_CHIPS:
      return {
        ...state,
        chips: state.chips += action.payload,
        stats: {
          ...state.stats,
          winnings: state.stats.purchased += action.payload,
        }
      };

    case PlayerActions.LOSE_CHIPS:
      return {
        ...state,
        chips: state.chips -= action.payload,
        stats: {
          ...state.stats,
          losses: state.stats.purchased += action.payload,
        }
      };

  }
}

