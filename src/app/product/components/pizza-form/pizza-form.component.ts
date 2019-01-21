import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  FormControl, FormGroup, FormArray,
  FormBuilder, Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { PizzaInterface, ToppingInterface } from '../../interfaces';
import * as storeProducts from './../../store';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  pizza$: Observable<PizzaInterface>;
  toppings$: Observable<ToppingInterface[]>;
  pizza: PizzaInterface;
  isEdit: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{}>,
    private ativatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isEdit = this.ativatedRoute.snapshot.params.id;
    this.isEdit ? this.subscribePizza() : this.initEmptyPizza();
    this.toppings$ = this.store.select(storeProducts.getToppingEntities);
  }

  get nameControlInvalid(): boolean {
    return this.form.get('name').hasError('required') && this.form.get('name').touched;
  }

  createPizza(): void {
    this.pizza.name = this.form.value.name;
    this.store.dispatch(new storeProducts.CreatePizza(this.pizza));
  }

  updatePizza(): void {
    const { value, valid, touched } = this.form;
    this.pizza.name = value.name;
    if (touched && valid) { this.store.dispatch(new storeProducts.UpdatePizza(this.pizza)); }
  }

  removePizza(): void {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store.dispatch(new storeProducts.RemovePizza(this.pizza));
      this.router.navigate(['products']);
    }
  }

  changeToppings(toppings: ToppingInterface[]) {
    this.pizza = { ...this.pizza, ...{ toppings: [...toppings] } };
  }

  private subscribePizza(): void {
    this.store.select(storeProducts.getPizzasEntities)
      .subscribe(pizzas => {
        this.pizza = pizzas.filter(pizza => pizza && pizza.id === parseInt(this.ativatedRoute.snapshot.params.id, 0))[0];
        this.initForm();
      });
  }

  private initEmptyPizza(): void {
    this.pizza = {
      name: '',
      toppings: []
    };
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [this.pizza.name, Validators.required],
      toppings: [this.pizza.toppings],
    });
  }
}
