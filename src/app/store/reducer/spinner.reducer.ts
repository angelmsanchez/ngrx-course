import { Action } from '@ngrx/store';

import { SpinnerAction } from './../actions/spinner.action';

export interface State {
  spinner: boolean;
}
const initialState: State = {
  spinner: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case SpinnerAction.ACTIVATE_SPINNER:
      return { ...state, spinner: true };
    case SpinnerAction.DESACTIVATE_SPINNER:
      return { ...state, spinner: false };
    default: {
      return state;
    }
  }
}
