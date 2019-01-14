import { createSelector } from '@ngrx/store';

import { State } from './../reducers';

const getTypeThemeState = (state: State) => state.app;

export const getTypeTheme = createSelector(
  getTypeThemeState,
  state => state.theme
);

export const getCart = createSelector(
  getTypeThemeState,
  state => state.cart
);
