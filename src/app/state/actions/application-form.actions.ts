import { Action } from '@ngrx/store';

export const SET_ALLOW_UNDERAGE_INDIVIDUALS = '[ApplicationForm] Set Allow Underage Individuals';
export const SET_SAVED = '[ApplicationForm] Set Saved';

export class SetAllowUnderageIndividuals implements Action {
  readonly type = SET_ALLOW_UNDERAGE_INDIVIDUALS;

  constructor(public payload: boolean) { }
}

export class SetSaved implements Action {
  readonly type = SET_SAVED;

  constructor(public payload: boolean) { }
}

export type Actions = SetAllowUnderageIndividuals |
  SetSaved;
