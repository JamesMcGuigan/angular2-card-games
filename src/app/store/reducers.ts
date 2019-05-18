// DOCS: https://www.intertech.com/Blog/ngrx-tutorial-quickly-adding-ngrx-to-your-angular-6-project/
// DOCS: https://www.concretepage.com/angular-2/ngrx/ngrx-store-4-angular-5-tutorial

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
}                        from '@ngrx/store';
import { PlayerReducer } from './player/player.reducer';
import { environment }   from '../../environments/environment';
import { PlayerState }   from './player/player.state';

export interface AppState {
  player: PlayerState;
}

export const reducers: ActionReducerMap<AppState> = {
  player: PlayerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
