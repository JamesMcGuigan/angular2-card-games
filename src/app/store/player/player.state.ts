import Player from './player.model';

// tslint:disable-next-line:no-empty-interface
export interface PlayerState extends Player {}

export function initializePlayerState(): PlayerState {
  return {
    chips: 0,
    stats: {
      purchased: 0,
      winnings:  0,
      losses:    0,
    }
  };
}
