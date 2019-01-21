import * as fromPizzas from '../actions/pizzas.action';

import { PizzaInterface } from '../../interfaces';

export interface PizzaState {
  entities: PizzaInterface[];
  loaded: boolean;
  loading: boolean;
}

const initialState: PizzaState = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromPizzas.PizzasActionTypes): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: [...action.payload]
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      state.entities.push(action.payload);
      return {
        ...state,
        entities: [...state.entities]
      };
    }

    case fromPizzas.UPDATE_PIZZA_SUCCESS: {
      const pizzaUpdate = action.payload;
      state.entities = state.entities.filter(pizza => {
        if (pizza.id === pizzaUpdate.id) {
          pizza = { ...pizzaUpdate };
        }
        return pizza;
      });
      return {
        ...state,
        entities: [...state.entities]
      };
    }

    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizzaRemove = action.payload;
      state.entities = state.entities.filter(pizza => pizza.id !== pizzaRemove.id);
      return {
        ...state,
        entities: [...state.entities]
      };
    }
  }

  return state;
}
