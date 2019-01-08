import { Action } from '@ngrx/store';

import { ACTIVATE_SPINNER, DEACTIVATE_SPINNER } from '@store/actions';

export interface State {
  isActive: boolean;
}
const initialState: State = {
  isActive: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ACTIVATE_SPINNER:
      return { ...state, isActive: true };
    case DEACTIVATE_SPINNER:
      return { ...state, isActive: false };
    default: {
      return state;
    }
  }
}
