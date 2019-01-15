import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';

import { PizzaInterface } from '../interfaces';
import { PizzaService } from '../services';
import * as pizzaActions from './../store/actions';
import * as pizzaSelectors from './../store/selectors';

@Injectable()
export class PizzaResolve implements Resolve<PizzaInterface[]> {

  constructor(
    private pizzaService: PizzaService,
    private store: Store<{}>,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // return this.store.dispatch(new pizzaActions.LoadPizzas());
    console.log('resolve');
    return this.store.select(pizzaSelectors.getPizzasEntities);
    // return this.pizzaService.getList();
  }
}
