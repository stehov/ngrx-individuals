import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import { Individual } from '../models/individual.model';
import * as individuals from './individuals.reducer';

import { ApplicationForm } from '../models/application-form';
import * as applicationForm from './application-form.reducer';

export interface State {
  individuals: Individual[];
  applicationForm: ApplicationForm;
}

const reducers = {
  individuals: individuals.reducer,
  applicationForm: applicationForm.reducer
};

const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
