import * as fromToppings from '../actions/toppings.action';

import { ToppingInterface } from '../../interfaces';

export interface ToppingState {
  entities: ToppingInterface[];
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingState = {
  entities: [],
  loaded: false,
  loading: false,
  selectedToppings: [],
};

export function reducer(state = initialState, action: fromToppings.ToppingsAction): ToppingState {
  switch (action.type) {
    // case fromToppings.VISUALISE_TOPPINGS: {
    //   const selectedToppings = action.payload;

    //   return {
    //     ...state,
    //     selectedToppings,
    //   };
    // }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        entities: [...action.payload]
      };
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
