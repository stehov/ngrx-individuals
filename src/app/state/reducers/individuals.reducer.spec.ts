import { Individual } from '../models/individual.model';
import { reducer } from './individuals.reducer';

import {
  AddIndividualAction,
  RemoveIndividualAction,
  UpdateIndividualAction,
  LoadSavedIndividualsAction
} from '../actions/individual.actions';

const individual1: Individual = {
  id: '1',
  firstName: 'John',
  lastName: 'Smith'
};

const individual2: Individual = {
  id: '2',
  firstName: 'Jane',
  lastName: 'Doe'
};

const individuals: Individual[] = [
  individual1,
  individual2
];

describe('applicants reducer', () => {
  it('should add applicant', () => {
    const action = new AddIndividualAction(individual1);
    const result = reducer(undefined, action);

    expect(result[0]).toBe(individual1);
  });

  it('should remove applicant', () => {
    const initialState = [individual1];
    const action = new RemoveIndividualAction(individual1);
    const result = reducer(initialState, action);

    expect(result.length).toEqual(0);
  });

  it('should update applicant', () => {
    const action = new UpdateIndividualAction({ id: individual2.id, firstName: 'Sally', lastName: 'Smith' });
    const result = reducer(individuals, action);

    expect(result[1].firstName).toBe('Sally');
    expect(result[1].lastName).toBe('Smith');
  });

  it('should load saved individuals', () => {
    const action = new LoadSavedIndividualsAction(individuals);
    const result = reducer(undefined, action);

    expect(result).toBe(individuals);
  });
});
