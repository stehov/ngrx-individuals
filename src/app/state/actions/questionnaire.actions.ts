import { Action } from '@ngrx/store';

import { Question } from '../models/question.model';

export const LOAD = '[Questionnaire] Load';
export const LOAD_SUCCESS = '[Questionnaire] Load Success';

export class Load implements Action {
  readonly type = LOAD;

  constructor() { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Question) { }
}

export type Actions = Load |
  LoadSuccess;
