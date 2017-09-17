import { Action } from '@ngrx/store';

export const SET_MINIMUM_AGE = '[ApplicationForm] Set Minimum Age';

export class SetMinimumAge implements Action {
  readonly type = SET_MINIMUM_AGE;

  constructor(public payload: number) { }
}

export type Actions = SetMinimumAge;
