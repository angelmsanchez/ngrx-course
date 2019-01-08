import { Action } from '@ngrx/store';

export const ACTIVATE_SPINNER = '[Spinner] Activate spinner';
export const DEACTIVATE_SPINNER = '[Spinner] Deactivate spinner';
export class ActivateSpinner implements Action {
  type: typeof ACTIVATE_SPINNER = ACTIVATE_SPINNER;
}

export class DeactivateSpinner implements Action {
  type: typeof DEACTIVATE_SPINNER = DEACTIVATE_SPINNER;
}
