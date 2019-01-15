import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { PizzaInterface } from '../../interfaces';
import * as pizzaActions from './../../store/actions';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  pizzas: PizzaInterface[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{}>,
  ) { }

  ngOnInit(): void {
    console.log('this.activatedRoute.snapshot.data');
    console.log(this.activatedRoute.snapshot.data);
    this.pizzas = this.activatedRoute.snapshot.data.pizzas;
    // this.store.dispatch(new pizzaActions.LoadPizzas());
  }
}
