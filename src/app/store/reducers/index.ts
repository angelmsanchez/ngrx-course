import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromSpinner from './spinner.reducer';

export interface State {
  spinner: fromSpinner.State;
}

export const reducers: ActionReducerMap<any> = {
  spinner: fromSpinner.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

