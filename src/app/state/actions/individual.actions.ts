import { Action } from '@ngrx/store';

import { Individual } from '../models/individual.model';

export const ActionTypes = {
  ADD_individual: '[individual] Add individual',
  REMOVE_individual: '[individual] Remove individual',
  UPDATE_individual: '[individual] Update individual',
  LOAD_SAVED_individualS: '[individuals] Load Saved individuals'
};

export class AddindividualAction implements Action {
  type = ActionTypes.ADD_individual;

  constructor(public payload: Individual) { }
}

export class RemoveindividualAction implements Action {
  type = ActionTypes.REMOVE_individual;

  constructor(public payload: Individual) { }
}

export class UpdateindividualAction implements Action {
  type = ActionTypes.UPDATE_individual;

  constructor(public payload: Individual) { }
}

export class LoadSavedindividualsAction implements Action {
  type = ActionTypes.LOAD_SAVED_individualS;

  constructor() { }
}
