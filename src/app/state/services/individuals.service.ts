import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

import * as actions from '../actions/individual.actions';
import { Individual } from '../models/individual.model';
import { State } from '../reducers';

const defaultIndividuals: Individual[] = [
  { id: UUID.UUID(), firstName: 'John', lastName: 'Smith' },
  { id: UUID.UUID(), firstName: 'Sally', lastName: 'Smith' },
  { id: UUID.UUID(), firstName: 'Robert', lastName: 'Smith' }
];

@Injectable()
export class individualsService {

  constructor(private store: Store<State>) { }

  getIndividuals(): Observable<Individual[]> {
    return this.store.select('individuals');
  }

  addIndividual(): void {
    this.store.dispatch({ type: actions.ActionTypes.ADD_individual, payload: { id: UUID.UUID(), firstName: '', lastName: '' } });
  }

  removeIndividual(individual): void {
    this.store.dispatch({ type: actions.ActionTypes.REMOVE_individual, payload: individual });
  }

  updateIndividual(value: any): void {
    const individualToUpdate: Individual = { id: value.id, firstName: value.firstName, lastName: value.lastName };
    this.store.dispatch({ type: actions.ActionTypes.UPDATE_individual, payload: individualToUpdate });
  }

  loadSavedIndividuals(): void {
    this.store.dispatch({ type: actions.ActionTypes.LOAD_SAVED_individualS, payload: defaultIndividuals });
  }
}
