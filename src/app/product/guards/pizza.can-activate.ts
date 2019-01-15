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
      switchMap(() => {
        console.log('canActivate tru');
        return of(true);
      }),
      catchError(() => {
        console.log('canActivate false');
        return of(false);
      })
    );
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(pizzaStore.getPizzasLoaded).pipe(
      tap(loaded => {
        console.log('dentro loaded: ' + loaded);
        if (!loaded) {
          console.log('dentro dispatch: ');
          this.store.dispatch(new pizzaStore.LoadPizzas());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
