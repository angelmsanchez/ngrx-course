import { createSelector } from '@ngrx/store';

import * as fromProducts from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import { PizzaInterface } from '../../interfaces';


export const getPizzaState = createSelector(
  fromProducts.getProductsState,
  (state: fromProducts.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.entities
);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.loaded
);

// export const getPizzaVisualised = createSelector(
//   getSelectedPizza,
//   fromToppings.getToppingEntities,
//   fromToppings.getSelectedToppings,
//   (pizza, toppingEntities, selectedToppings) => {
//     const toppings = selectedToppings.map(id => toppingEntities[id]);
//     return { ...pizza, toppings };
//   }
// );

export const getSelectedPizza = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.loaded
);
