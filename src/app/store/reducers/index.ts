import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromSpinner from './spinner.reducer';
import * as fromApp from './app.reducer';

export interface State {
  spinner: fromSpinner.State;
  app: fromApp.State;
}

export const reducers: ActionReducerMap<any> = {
  spinner: fromSpinner.reducer,
  app: fromApp.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

