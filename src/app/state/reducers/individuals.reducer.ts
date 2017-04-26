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
        return individual.id !== action.payload;
      });

    case actions.ActionTypes.UPDATE_INDIVIDUAL: {
      return state.map(value => {
        return value.id === action.payload.id ? Object.assign({}, action.payload) : value;
      });
    }

    case actions.ActionTypes.SET_INDIVIDUALS: {
      return action.payload;
    }

    case actions.ActionTypes.LOAD_INDIVIDUALS_SUCCESS: {
      return action.payload;
    }

    default:
      return state;
  }
};
