import { Action, ActionReducer } from '@ngrx/store';

import * as fromQuestionnaire from '../actions/questionnaire.actions';
import { Question } from '../models/question.model';

export const initialState: Question = undefined;

export function reducer(
  state = initialState,
  action: fromQuestionnaire.Actions) {

  switch (action.type) {

    case fromQuestionnaire.LOAD_SUCCESS: {
      return action.payload;
    }

    default:
      return state;
  }
};

export const getQuestionnaire = (state: Question) => state;
