import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.action';
import { ToppingService } from '../../services';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingService: ToppingService
  ) { }

  @Effect()
  loadToppings$ = this.actions$.pipe(
    ofType(toppingsActions.LOAD_TOPPINGS),
    switchMap(() => {
      return this.toppingService
        .getToppings()
        .pipe(
          map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
          catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
        );
    })
  );
}
