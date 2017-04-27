import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_ALLOW_UNDERAGE_INDIVIDUALS: '[ApplicationForm] Set Allow Underage Individuals',
  SET_SAVED: '[ApplicationForm] Set Saved'
};

export class SetAllowUnderageIndividuals implements Action {
  type = ActionTypes.SET_ALLOW_UNDERAGE_INDIVIDUALS;

  constructor(public payload: boolean) { }
}

export class SetSaved implements Action {
  type = ActionTypes.SET_SAVED;

  constructor(public payload: boolean) { }
}
