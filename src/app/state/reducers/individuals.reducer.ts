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
      return updateIndividual(state, action.payload);
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

const updateIndividual = (state, individual) => {
  let newState = [];

  state.forEach(item => {
    if (item.id === individual.id) {
      newState = [...newState, Object.assign({}, item, { firstName: individual.firstName, lastName: individual.lastName, age: individual.age })];
    } else {
      newState = [...newState, item]
    }
  });

  return newState;
};
