// DOCS: https://github.com/ngrx/platform/blob/master/docs/store/selectors.md

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState }                              from '../reducers';
import { PlayerState }                           from './player.state';

export const selectFeature = createFeatureSelector<AppState, PlayerState>( 'player' );

export const getChipCount = createSelector(
  selectFeature,
  (state: PlayerState) => state.chips
);

export const getChipStats = createSelector(
  selectFeature,
  (state: PlayerState) => state.stats
);
