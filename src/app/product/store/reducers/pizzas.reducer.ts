import * as fromPizzas from '../actions/pizzas.action';

import { PizzaInterface } from '../../interfaces';

export interface PizzaState {
  entities: { [id: number]: PizzaInterface };
  loaded: boolean;
  loading: boolean;
}

const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromPizzas.PizzasActionTypes): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      console.log('dentro load pizzas');
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      console.log('dentro load pizzas success');
      const pizzas = action.payload;
      // const entities = pizzas.reduce(
      //   (entities: { [id: number]: PizzaInterface }, pizza: PizzaInterface) => {
      //     return {
      //       ...entities,
      //       [pizza.id]: pizza,
      //     };
      //   },
      //   {
      //     ...state.entities,
      //   }
      // );

      return {
        ...state,
        loading: false,
        loaded: true,
        // entities,
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzas.UPDATE_PIZZA_SUCCESS:
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const { [pizza.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
