import { createSelector } from '@ngrx/store';

import { State } from './../reducers';

export const getSpinnerState = (state: State) => state.spinner;

export const isSpinnerActive = createSelector(
  getSpinnerState,
  state => state.isActive
);
