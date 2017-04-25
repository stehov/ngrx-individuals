import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

import { Individual } from '../state/models/individual.model';

const savedIndividuals: Individual[] = [
  { id: UUID.UUID(), firstName: 'John', lastName: 'Smith', age: 38 },
  { id: UUID.UUID(), firstName: 'Sally', lastName: 'Smith', age: 44 },
  { id: UUID.UUID(), firstName: 'Robert', lastName: 'Smith', age: 31 }
];

@Injectable()
export class IndividualsService {

  all(): Observable<Individual[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(savedIndividuals);
      }, 550);
    });
  }
}
