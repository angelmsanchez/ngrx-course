import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { PizzaInterface } from '../interfaces';
import { PizzaService } from '../services';

@Injectable()
export class PizzaResolve implements Resolve<PizzaInterface[]> {

  constructor(
    private pizzaService: PizzaService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.pizzaService.getList();
  }
}
