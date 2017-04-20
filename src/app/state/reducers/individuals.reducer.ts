import { ActionReducer, Action, Store } from '@ngrx/store';

import * as actions from '../actions/individual.actions';
import { Individual } from '../models/individual.model';

export const initialState: Individual[] = [];

export const reducer: ActionReducer<Individual[]> = (state: Individual[] = initialState, action: Action) => {
  switch (action.type) {
    case actions.ActionTypes.ADD_INDIVIDUAL:
      return [...state, action.payload];

    case actions.ActionTypes.REMOVE_INDIVIDUAL:
      return state.filter((individual: Individual) => {
        return individual.id !== action.payload.id;
      });

    case actions.ActionTypes.UPDATE_INDIVIDUAL: {
      let newState = [];

      state.forEach(item => {
        if (item.id === action.payload.id) {
          newState = [...newState, Object.assign({}, item, { firstName: action.payload.firstName, lastName: action.payload.lastName })];
        } else {
          newState = [...newState, item]
        }
      });

      return newState;
    }

    case actions.ActionTypes.LOAD_SAVED_INDIVIDUALS:
      return action.payload;

    default:
      return state;
  }
};
