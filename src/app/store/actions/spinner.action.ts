import { Action } from '@ngrx/store';

export class SpinnerAction {
  static ACTIVATE_SPINNER = 'ACTIVATE_SPINNER';
  static DESACTIVATE_SPINNER = 'DESACTIVATE_SPINNER';

  activeSpinner(): Action {
    return {
      type: SpinnerAction.ACTIVATE_SPINNER
    };
  }

  deactiveSpinner(): Action {
    return {
      type: SpinnerAction.DESACTIVATE_SPINNER
    };
  }
}
