import { Injectable } from '@angular/core';

@Injectable()
export class IndividualsServiceMock {

  getIndividuals(): any {
    // return this.store.select('individuals');
  }

  initializeIndividual(): any {
    // return { id: UUID.UUID(), firstName: '', lastName: '' };
  }

  addIndividual(individual: any): void {
    // this.store.dispatch({ type: actions.ActionTypes.ADD_INDIVIDUAL, payload: individual });
  }

  removeIndividual(individualId): void {
    // this.store.dispatch({ type: actions.ActionTypes.REMOVE_INDIVIDUAL, payload: individualId });
  }

  updateIndividual(value: any): void {
    // const individualToUpdate: Individual = { id: value.id, firstName: value.firstName, lastName: value.lastName };
    // this.store.dispatch({ type: actions.ActionTypes.UPDATE_INDIVIDUAL, payload: individualToUpdate });
  }

  loadSavedIndividuals(): void {
    // this.store.dispatch({ type: actions.ActionTypes.LOAD_SAVED_INDIVIDUALS, payload: defaultIndividuals });
  }
}
