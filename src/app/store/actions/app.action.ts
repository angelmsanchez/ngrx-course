import { Action } from '@ngrx/store';

export const CHANGE_TYPE_THEME = '[App] Change theme app';

export class ChangeTheme implements Action {
  readonly type = CHANGE_TYPE_THEME;
  constructor(public payload: any) { }
}

// action types
export type AppAction = ChangeTheme;

