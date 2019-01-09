import * as fromToppings from '../actions/toppings.action';

import { ToppingInterface } from '../../interfaces';

export interface ToppingsState {
  entities: { [id: number]: ToppingInterface };
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: [],
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingsState {
  switch (action.type) {
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings,
      };
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      // const entities = toppings.reduce(
      //   (entities: { [id: number]: ToppingInterface }, ToppingInterface: Topping) => {
      //     return {
      //       ...entities,
      //       [topping.id]: topping,
      //     };
      //   },
      //   {
      //     ...state.entities,
      //   }
      // );

      // return {
      //   ...state,
      //   loaded: true,
      //   loading: false,
      //   entities,
      // };
      return state;
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
