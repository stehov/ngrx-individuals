import { Action, ActionReducer } from '@ngrx/store';

import * as actions from '../actions/application-form.actions';
import { ApplicationForm } from '../models/application-form';

export const initialState: ApplicationForm = {
  allowUnderageIndividuals: false,
  saved: false
};

export const reducer: ActionReducer<ApplicationForm> = (state: ApplicationForm = initialState, action: Action) => {

  switch (action.type) {

    case actions.ActionTypes.SET_ALLOW_UNDERAGE_INDIVIDUALS: {
      return {
        allowUnderageIndividuals: action.payload,
        saved: state.saved
      };
    }

    case actions.ActionTypes.SET_SAVED: {
      return {
        allowUnderageIndividuals: state.allowUnderageIndividuals,
        saved: action.payload
      };
    }

    default:
      return state;
  }
};
