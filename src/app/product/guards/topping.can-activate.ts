import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromProducts from '../store';

@Injectable()
export class ToppingCanActivate implements CanActivate {

  constructor(
    private store: Store<{}>,
  ) { }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromProducts.getToppingsLoaded).pipe(
      tap(loaded => {
        if (!loaded) { this.store.dispatch(new fromProducts.LoadToppings()); }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
