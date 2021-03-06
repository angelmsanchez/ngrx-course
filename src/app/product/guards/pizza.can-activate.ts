import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as pizzaStore from '../store';

@Injectable()
export class PizzaCanActivate implements CanActivate {

  constructor(
    private store: Store<{}>
  ) { }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(pizzaStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) { this.store.dispatch(new pizzaStore.LoadPizzas()); }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
