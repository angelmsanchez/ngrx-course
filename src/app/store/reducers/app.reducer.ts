import { Action } from '@ngrx/store';

import * as AppActions from '@store/actions';
import { PizzaInterface } from '../../product/interfaces';

export interface State {
  theme: string;
  cart: PizzaInterface[];
}
const initialState: State = {
  theme: '',
  cart: []
};

export function reducer(state = initialState, action: AppActions.AppAction): State {
  switch (action.type) {
    case AppActions.CHANGE_TYPE_THEME:
      return {
        ...state, ...{ theme: action.payload }
      };
    case AppActions.ADD_PRODUCT_CART:
      return {
        ...state, ...{ cart: [...state.cart, action.payload] }
      };
    default: {
      return state;
    }
  }
}
