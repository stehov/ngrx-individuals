import { Action } from '@ngrx/store';

import { Individual } from '../models/individual.model';

export const ActionTypes = {
  ADD_INDIVIDUAL: '[Individual] Add Individual',
  REMOVE_INDIVIDUAL: '[individual] Remove Individual',
  UPDATE_INDIVIDUAL: '[Individual] Update Individual',
  LOAD_SAVED_INDIVIDUALS: '[Individual] Load Saved Individuals'
};

export class AddIndividualAction implements Action {
  type = ActionTypes.ADD_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class RemoveIndividualAction implements Action {
  type = ActionTypes.REMOVE_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class UpdateIndividualAction implements Action {
  type = ActionTypes.UPDATE_INDIVIDUAL;

  constructor(public payload: Individual) { }
}

export class LoadSavedIndividualsAction implements Action {
  type = ActionTypes.LOAD_SAVED_INDIVIDUALS;

  constructor(public payload: Individual[]) { }
}
