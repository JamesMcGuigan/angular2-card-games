import { Injectable }              from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action }                  from '@ngrx/store';
import { Observable }              from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
import { tap }                     from 'rxjs/operators';
import * as PlayerActions          from './player.actions';

@Injectable()
export class PlayerEffects {

  constructor(
    private actions$: Actions
  ) { }

  @Effect()
  any$: Observable<Action> = this.actions$.pipe(
    ofType(PlayerActions.BUY_CHIPS),
    tap(action => {
      console.log('@Effect() PlayerEffects', action);
    })
  );

  @Effect()
  buyChips$: Observable<Action> = this.actions$.pipe(
    ofType(PlayerActions.BUY_CHIPS),
    tap(action => {
      console.log('@Effect() PlayerEffects', action);
    })
  );

}
