import { Action } from '@ngrx/store';

import { Individual } from '../models/individual.model';

export const ADD_INDIVIDUAL = '[Individual] Add Individual';
export const REMOVE_INDIVIDUAL = '[individual] Remove Individual';
export const REMOVE_INDIVIDUAL_BY_ID = '[individual] Remove Individual By ID';
export const UPDATE_INDIVIDUAL = '[Individual] Update Individual';
export const LOAD_INDIVIDUALS = '[Individual] Load Individuals';
export const LOAD_INDIVIDUALS_SUCCESS = '[Individual] Load Individuals Success';

export class AddIndividualAction implements Action {
  readonly type = ADD_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class RemoveIndividualAction implements Action {
  readonly type = REMOVE_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class RemoveIndividualByIdAction implements Action {
  readonly type = REMOVE_INDIVIDUAL_BY_ID;

  constructor(public payload: string) { }
}

export class UpdateIndividualAction implements Action {
  readonly type = UPDATE_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class LoadIndividualsAction implements Action {
  readonly type = LOAD_INDIVIDUALS;

  constructor() { }
}

export class LoadIndividualsSuccessAction implements Action {
  readonly type = LOAD_INDIVIDUALS_SUCCESS;

  constructor(public payload: Individual[]) { }
}

export type Actions = AddIndividualAction |
  RemoveIndividualAction |
  UpdateIndividualAction |
  LoadIndividualsAction |
  LoadIndividualsSuccessAction;
