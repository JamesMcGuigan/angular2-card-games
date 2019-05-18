import Player                                 from './player.model';
import * as PlayerActions                     from './player.actions';
import { PlayerReducer }                      from './player.reducer';
import { PlayerState, initializePlayerState } from './player.state';
import * as PlayerSelectors                   from './player.selectors';
import { PlayerEffects }                      from './player.effects';

export default {
  model:      Player,
  actions:    PlayerActions,
  reducer:    PlayerReducer,
  initialize: initializePlayerState,
  selectors:  PlayerSelectors,
  effects:    PlayerEffects
};
