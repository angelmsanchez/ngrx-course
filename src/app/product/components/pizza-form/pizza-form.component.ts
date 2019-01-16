import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  FormControl, FormGroup, FormArray,
  FormBuilder, Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { PizzaInterface, ToppingInterface } from '../../interfaces';
import * as storeProducts from './../../store';
import { ActivatedRoute } from '@angular/router';

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
  form = this.formBuilder.group({
    name: ['', Validators.required],
    toppings: [[]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{}>,
    private ativatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.isEdit = this.ativatedRoute.snapshot.params.id;
    if (this.isEdit) { this.subscribePizza(); }
    // this.pizza$ = this.store.select(storePizzas.getPizzasLoaded).pipe(
    //   tap((pizza: PizzaInterface = null) => {
    //     const pizzaExists = !!(pizza && pizza.toppings);
    //     const toppings = pizzaExists
    //       ? pizza.toppings.map(topping => topping.id)
    //       : [];
    //     // this.store.dispatch(new storePizzas.VisualiseToppings(toppings));
    //   })
    // );
    this.toppings$ = this.store.select(storeProducts.getToppingEntities);
    // this.visualise$ = this.store.select(storePizzas.getPizzaVisualised);
  }

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (this.pizza && this.pizza.id) {
  //     this.exists = true;
  //     this.form.patchValue(this.pizza);
  //   }
  //   this.form
  //     .get('toppings')
  //     .valueChanges.pipe(
  //       map(toppings => toppings.map((topping: Topping) => topping.id))
  //     )
  //     .subscribe(value => this.selected.emit(value));
  // }

  createPizza(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      // this.store.dispatch(new storeProducts.CreatePizza(value));
    }
  }

  updatePizza(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      // this.store.dispatch(new storeProducts.UpdatePizza(value));
    }
  }

  removePizza(form: FormGroup) {
    const { value } = form;
    const remove = window.confirm('Are you sure?');
    if (remove) {
      // this.store.dispatch(new storeProducts.RemovePizza(value));
    }
  }

  changeToppings(toppings: ToppingInterface[]) {
    console.log('toppings ', toppings);
    this.pizza.toppings = [...toppings];
    // this.store.dispatch(new storeProducts.VisualiseToppings(event));
  }

  private subscribePizza(): void {
    this.store.select(storeProducts.getPizzasEntities)
      .subscribe(pizzas => {
        this.pizza = pizzas.filter(pizza => pizza.id === this.ativatedRoute.snapshot.params.id)[0];
      });
  }
}
