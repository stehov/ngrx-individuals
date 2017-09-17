import { Action, ActionReducer } from '@ngrx/store';

import * as fromApplicationForm from '../actions/application-form.actions';
import { ApplicationForm } from '../models/application-form';

export const initialState: ApplicationForm = {
  minimumAge: undefined
};

export function reducer(
  state = initialState,
  action: fromApplicationForm.Actions) {

  switch (action.type) {

    case fromApplicationForm.SET_MINIMUM_AGE: {
      return {
        minimumAge: action.payload
      };
    }

    default:
      return state;
  }
};

export const getMinimumAge = (state: ApplicationForm) => state.minimumAge;
