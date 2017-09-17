import { ActionReducer, Action, Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';

import * as utils from '../../core/utils';
import * as fromIndividual from '../actions/individual.actions';
import { Individual } from '../models/individual.model';

export interface State {
  ids: string[];
  entities: { [key: string]: Individual };
}

const initialState: State = {
  ids: [],
  entities: {}
};

export function reducer(
  state = initialState,
  action: fromIndividual.Actions) {

  switch (action.type) {

    case fromIndividual.ADD_INDIVIDUAL:
      return {
        ids: [...state.ids, action.payload.id],
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        }
      };

    case fromIndividual.REMOVE_INDIVIDUAL:
      return {
        ids: state.ids.filter(id => id !== action.payload.id),
        entities: utils.removeByKey(state.entities, [action.payload.id])
      };

    case fromIndividual.UPDATE_INDIVIDUAL: {
      return {
        ids: state.ids,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        }
      };
    }

    case fromIndividual.LOAD_INDIVIDUALS_SUCCESS: {
      const individuals = action.payload;
      const ids = individuals.map(i => i.id);

      const entities = individuals.reduce((e: { [ids: string]: Individual }, individual: Individual) => {
        return {
          ...e,
          [individual.id]: individual
        };
      }, {});

      return {
        ids: ids,
        entities: entities
      };
    }

    default:
      return state;
  }
};

export const getIds = (state: State) => state.ids;

export const getEntities = (state: State) => state.entities;
