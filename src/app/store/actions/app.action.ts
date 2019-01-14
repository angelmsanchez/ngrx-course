import { Action } from '@ngrx/store';

export const CHANGE_TYPE_THEME = '[App] Change theme app';
export const ADD_PRODUCT_CART = '[App] Add product to cart';

export class ChangeTheme implements Action {
  readonly type = CHANGE_TYPE_THEME;
  constructor(public payload: any) { }
}

export class AddProductCart implements Action {
  readonly type = ADD_PRODUCT_CART;
  constructor(public payload: any) { }
}

// action types
export type AppAction = ChangeTheme | AddProductCart;

