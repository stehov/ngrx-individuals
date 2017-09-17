import { Individual } from '../models/individual.model';
import { reducer } from './individuals.reducer';

import {
  AddIndividualAction,
  RemoveIndividualAction,
  UpdateIndividualAction
} from '../actions/individual.actions';

const individual1: Individual = {
  id: '1',
  firstName: 'John',
  lastName: 'Smith',
  age: 33
};

const individual2: Individual = {
  id: '2',
  firstName: 'Jane',
  lastName: 'Doe',
  age: 44
};

const individuals: Individual[] = [
  individual1,
  individual2
];

describe('individual reducer', () => {
  it('should add individual', () => {
    const action = new AddIndividualAction(individual1);
    const result = reducer(undefined, action);

    expect(result.ids[0]).toBe(individual1.id);
    expect(result.entities[individual1.id]).toBe(individual1);
  });

  it('should remove individual', () => {
    const initialState = {
      ids: [individual1.id],
      entities: {
        [individual1.id]: individual1
      }
    };

    const action = new RemoveIndividualAction(individual1);
    const result = reducer(initialState, action);

    expect(result.ids.length).toEqual(0);
  });

  // it('should update individual', () => {
  //   const action = new UpdateIndividualAction({ id: individual2.id, firstName: 'Sally', lastName: 'Smith', age: 55 });
  //   const result = reducer(individuals, action);

  //   expect(result[1].firstName).toBe('Sally');
  //   expect(result[1].lastName).toBe('Smith');
  // });
});
