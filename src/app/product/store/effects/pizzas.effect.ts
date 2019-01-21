import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.action';
import { PizzaService } from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: PizzaService,
  ) { }

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => {
      return this.pizzaService
        .getList()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        );
    })
  );

  @Effect()
  createPizza$ = this.actions$.pipe(
    ofType(pizzaActions.CREATE_PIZZA),
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .create(pizza)
        .pipe(map(newPizza => new pizzaActions.CreatePizzaSuccess(newPizza)));
    })
  );

  @Effect()
  updatePizza$ = this.actions$.pipe(
    ofType(pizzaActions.UPDATE_PIZZA),
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .update(pizza)
        .pipe(
          map(updatePizza => new pizzaActions.UpdatePizzaSuccess(updatePizza)),
          catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
        );
    })
  );

  @Effect()
  removePizza$ = this.actions$.pipe(
    ofType(pizzaActions.REMOVE_PIZZA),
    map((action: pizzaActions.RemovePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .remove(pizza)
        .pipe(
          map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
          catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
        );
    })
  );
}
