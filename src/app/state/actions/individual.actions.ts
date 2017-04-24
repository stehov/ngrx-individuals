import { Action } from '@ngrx/store';

import { Individual } from '../models/individual.model';

export const ActionTypes = {
  ADD_INDIVIDUAL: '[Individual] Add Individual',
  REMOVE_INDIVIDUAL: '[individual] Remove Individual',
  UPDATE_INDIVIDUAL: '[Individual] Update Individual',
  SET_INDIVIDUALS: '[Individual] Set Individuals',
  LOAD_INDIVIDUALS: '[Individual] Load Individuals',
  LOAD_INDIVIDUALS_SUCCESS: '[Individual] Load Individuals Success'
};

export class AddIndividualAction implements Action {
  type = ActionTypes.ADD_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class RemoveIndividualAction implements Action {
  type = ActionTypes.REMOVE_INDIVIDUAL;

  constructor(public payload: string) { }
}

export class UpdateIndividualAction implements Action {
  type = ActionTypes.UPDATE_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class SetIndividualsAction implements Action {
  type = ActionTypes.SET_INDIVIDUALS;

  constructor(public payload: Individual[]) { }
}

export class LoadIndividualsAction implements Action {
  type = ActionTypes.LOAD_INDIVIDUALS;

  constructor() { }
}

export class LoadIndividualsSuccessAction implements Action {
  type = ActionTypes.LOAD_INDIVIDUALS_SUCCESS;

  constructor(public payload: Individual[]) { }
}
