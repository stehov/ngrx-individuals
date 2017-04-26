import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_ALLOW_UNDERAGE_INDIVIDUALS: '[ApplicationForm] Set Allow Underage Applicants'
};

export class SetAllowUnderageIndividuals implements Action {
  type = ActionTypes.SET_ALLOW_UNDERAGE_INDIVIDUALS;

  constructor(public payload: boolean) { }
}
