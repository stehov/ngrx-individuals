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
  @Input() submitted: boolean;
  individuals$: Observable<Individual[]>;
  individualsSubscription: Subscription;
  individualsFormArray: FormArray;
  minimumAge$: Observable<number>;

  get valid() {
    return this.individualsFormArray.valid;
  }

  constructor(private store: Store<reducers.State>) {
    this.individuals$ = this.store.select(reducers.getIndividuals);
    this.minimumAge$ = this.store.select(reducers.getMinimumAge);
  }

  ngOnInit() {
    this.createIndividualsFormArray();
    this.setUpSubscriptions();
  }

  ngOnDestroy() {
    this.individualsSubscription.unsubscribe();
  }

  setUpSubscriptions() {
    this.individualsSubscription = Observable.combineLatest(this.individuals$, this.minimumAge$,
      (individuals, minimumAge) => individuals)
      .subscribe(individuals => {
        this.initIndividualsFormArray(individuals);
      });
  }

  createIndividualsFormArray() {
    this.individualsFormArray = new FormArray([], this.validateIndividualsArray);
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

  validateIndividualsArray(c: FormArray) {
    return c.length < 1 ? { insufficientIndividuals: true } : null;
  }

  customTrackBy(index, item: FormControl) {
    return item.value.id;
  }
}
