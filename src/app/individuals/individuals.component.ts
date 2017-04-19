import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '../state/reducers';
import { individualsService } from '../state/services/individuals.service';
import { Individual } from '../state/models/individual.model';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualsComponent {
  individuals$: Observable<Individual[]> = this.individualsService.getIndividuals();
  store$ = this.store.select(store => store);

  constructor(private individualsService: individualsService,
    private store: Store<State>) { }

  addIndividual(): void {
    this.individualsService.addIndividual();
  }

  removeIndividual(individual: Individual): void {
    this.individualsService.removeIndividual(individual);
  }

  updateIndividual(value: any): void {
    this.individualsService.updateIndividual(value);
  }

  loadDefaultIndividuals(): void {
    this.individualsService.loadSavedIndividuals();
  }

  custom(index, item) {
    return index;
  }
}
