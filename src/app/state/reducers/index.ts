import { ActionReducerMap, combineReducers, createSelector, createFeatureSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import { Individual } from '../models/individual.model';
import * as individuals from './individuals.reducer';

import { ApplicationForm } from '../models/application-form';
import * as applicationForm from './application-form.reducer';

import { Question } from '../models/question.model';
import * as questionnaire from './questionnaire.reducer';

export interface State {
  individuals: individuals.State;
  applicationForm: ApplicationForm;
  questionnaire: Question;
}

export const reducers: ActionReducerMap<State> = {
  individuals: individuals.reducer,
  applicationForm: applicationForm.reducer,
  questionnaire: questionnaire.reducer
};

// individuals

export const getIndividualsState = createFeatureSelector<individuals.State>('individuals');

export const getIndividualIds = createSelector(getIndividualsState, individuals.getIds);

export const getIndividualEntities = createSelector(getIndividualsState, individuals.getEntities);

export const getIndividuals = createSelector(
  getIndividualIds,
  getIndividualEntities,
  (ids, entities) => {
    return ids.map(id => entities[id]);
  }
);

// application form

export const getApplicationFormState = createFeatureSelector<ApplicationForm>('applicationForm');

export const getMinimumAge = createSelector(getApplicationFormState, applicationForm.getMinimumAge);

// questionnaire

export const getQuestionnaireState = createFeatureSelector<Question>('questionnaire');

export const getQuestionnaire = createSelector(getQuestionnaireState, questionnaire.getQuestionnaire);
