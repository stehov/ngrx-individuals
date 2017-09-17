import { ActionReducerMap, combineReducers, createSelector, createFeatureSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import { Individual } from '../models/individual.model';
import * as fromIndividuals from './individuals.reducer';

import { ApplicationForm } from '../models/application-form';
import * as applicationForm from './application-form.reducer';

export interface State {
  individuals: fromIndividuals.State;
  applicationForm: ApplicationForm;
}

export const reducers: ActionReducerMap<State> = {
  individuals: fromIndividuals.reducer,
  applicationForm: applicationForm.reducer
};

export const getIndividualsState = createFeatureSelector<fromIndividuals.State>('individuals');

export const getIndividualIds = createSelector(getIndividualsState, fromIndividuals.getIds);

export const getIndividualEntities = createSelector(getIndividualsState, fromIndividuals.getEntities);

export const getIndividuals = createSelector(
  getIndividualIds,
  getIndividualEntities,
  (ids, entities) => {
    return ids.map(id => entities[id]);
  }
);
