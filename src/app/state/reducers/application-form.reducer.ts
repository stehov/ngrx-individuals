import { Action, ActionReducer } from '@ngrx/store';

import * as fromApplicationForm from '../actions/application-form.actions';
import { ApplicationForm } from '../models/application-form';

export const initialState: ApplicationForm = {
  allowUnderageIndividuals: false,
  saved: false
};

export function reducer(
  state = initialState,
  action: fromApplicationForm.Actions) {

  switch (action.type) {

    case fromApplicationForm.SET_ALLOW_UNDERAGE_INDIVIDUALS: {
      return {
        allowUnderageIndividuals: action.payload,
        saved: state.saved
      };
    }

    case fromApplicationForm.SET_SAVED: {
      return {
        allowUnderageIndividuals: state.allowUnderageIndividuals,
        saved: action.payload
      };
    }

    default:
      return state;
  }
};
