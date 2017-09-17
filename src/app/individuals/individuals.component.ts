import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';

import * as reducers from '../state/reducers';
import * as fromIndividual from '../state/actions/individual.actions';
import { Individual } from '../state/models/individual.model';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualsComponent implements OnInit, OnDestroy {
  individuals$: Observable<Individual[]>;
  individualsSubscription: Subscription;
  individualsFormArray: FormArray;

  get valid() {
    return this.individualsFormArray.valid;
  }

  constructor(private store: Store<reducers.State>) {
    this.individuals$ = this.store.select(reducers.getIndividuals);
  }

  ngOnInit() {
    this.individualsFormArray = this.createIndividualsFormArray();
    this.setUpSubscriptions();
  }

  ngOnDestroy() {
    this.individualsSubscription.unsubscribe();
  }

  setUpSubscriptions() {
    this.individualsSubscription = this.individuals$.subscribe(individuals => {
      this.initIndividualsFormArray(individuals);
    });
  }

  createIndividualsFormArray(): FormArray {
    this.individualsFormArray = new FormArray([]);
    return this.individualsFormArray;
  }

  clearIndividualsFormArray() {
    while (this.individualsFormArray.length) {
      this.individualsFormArray.removeAt(0);
    }
  }

  initIndividualsFormArray(individuals: Individual[]) {
    this.clearIndividualsFormArray();

    individuals.forEach(individual => {
      this.individualsFormArray.push(this.createIndividualControl(individual));
    });
  }

  createIndividualControl(individual: Individual): FormControl {
    const individualControl = new FormControl(individual);

    individualControl.valueChanges
      .subscribe(value => {
        this.store.dispatch(new fromIndividual.UpdateIndividualAction(value));
      });

    return individualControl;
  }

  addIndividual(): void {
    const newIndividual = { id: UUID.UUID(), firstName: '', lastName: '', age: undefined };
    this.store.dispatch(new fromIndividual.AddIndividualAction(newIndividual));
  }

  removeIndividual(id: string): void {
    this.store.dispatch(new fromIndividual.RemoveIndividualByIdAction(id));
  }

  customTrackBy(index, item: FormControl) {
    return item.value.id;
  }
}
