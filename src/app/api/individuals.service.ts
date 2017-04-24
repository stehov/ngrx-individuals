import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

import { Individual } from '../state/models/individual.model';

const savedIndividuals: Individual[] = [
  { id: UUID.UUID(), firstName: 'John', lastName: 'Smith' },
  { id: UUID.UUID(), firstName: 'Sally', lastName: 'Smith' },
  { id: UUID.UUID(), firstName: 'Robert', lastName: 'Smith' }
];

@Injectable()
export class IndividualsService {

  all(): Observable<Individual[]> {
    console.log('all individuals');

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(savedIndividuals);
      }, 550);
    });
  }
}
