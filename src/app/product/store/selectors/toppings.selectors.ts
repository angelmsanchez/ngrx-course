import { createSelector } from '@ngrx/store';

import * as fromProducts from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingsState = createSelector(
  fromProducts.getProductsState,
  (state: fromProducts.ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingsState,
  (state: fromToppings.ToppingState) => state.entities
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  (state: fromToppings.ToppingState) => state.loaded
);

// export const getToppingsLoaded = (state: ToppingState) => state.loaded;
// export const getToppingsLoading = (state: ToppingState) => state.loading;
// export const getSelectedToppings = (state: ToppingState) => state.selectedToppings;

// export const getSelectedToppings = createSelector(
//   getToppingsState,
//   fromToppings.getSelectedToppings
// );

// export const getAllToppings = createSelector(getToppingEntities, entities => {
//   return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
// });

// export const getToppingsLoaded = createSelector(
//   getToppingsState,
//   fromToppings.getToppingsLoaded
// );

// export const getToppingsLoading = createSelector(
//   getToppingsState,
//   fromToppings.getToppingsLoading
// );
