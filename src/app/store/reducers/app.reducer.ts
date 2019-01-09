import { Action } from '@ngrx/store';

import * as AppActions from '@store/actions';

export interface State {
  theme: string;
}
const initialState: State = {
  theme: ''
};

export function reducer(state = initialState, action: AppActions.AppAction): State {
  switch (action.type) {
    case AppActions.CHANGE_TYPE_THEME:
      return {
        ...state, ...{ theme: action.payload }
      };
    default: {
      return state;
    }
  }
}
