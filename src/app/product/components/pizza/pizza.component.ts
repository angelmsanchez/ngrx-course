import { Component, OnInit, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { PizzaInterface } from '../../interfaces';
import { AddProductCart } from '@store/actions';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent {
  @Input() pizza: PizzaInterface;

  constructor(
    private store: Store<{}>,
    private router: Router,
  ) { }

  addPizza(): void {
    this.store.dispatch(new AddProductCart(this.pizza));
  }

  goToDetail(): void {
    this.router.navigate(['products', this.pizza.id]);
  }
}
