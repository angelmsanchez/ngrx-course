import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { PizzaInterface } from '../../interfaces';
import * as pizzaSelectors from './../../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  pizzas$: Observable<PizzaInterface[]>;

  constructor(
    private store: Store<{}>,
  ) { }

  ngOnInit(): void {
    this.pizzas$ = this.store.select(pizzaSelectors.getPizzasEntities);
  }
}
