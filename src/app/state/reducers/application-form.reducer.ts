import { ActionReducer, Action, Store } from '@ngrx/store';

import * as actions from '../actions/application-form.actions';
import { ApplicationForm } from '../models/application-form';

export const initialState: ApplicationForm = { allowUnderageIndividuals: false };

export const reducer: ActionReducer<ApplicationForm> = (state: ApplicationForm = initialState, action: Action) => {

  switch (action.type) {

    case actions.ActionTypes.SET_ALLOW_UNDERAGE_INDIVIDUALS: {
      return { allowUnderageIndividuals: action.payload };
    }

    default:
      return state;
  }
};
