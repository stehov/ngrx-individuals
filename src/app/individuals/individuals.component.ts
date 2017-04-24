import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';

import * as reducers from '../state/reducers';
import * as actions from '../state/actions/individual.actions';
import { Individual } from '../state/models/individual.model';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualsComponent implements OnInit {
  individuals$: Observable<Individual[]>;
  store$ = this.store.select(store => store);
  form: FormGroup;
  individualsFormArray: FormArray;

  constructor(private store: Store<reducers.State>,
    private formBuilder: FormBuilder) {
    this.individuals$ = store.select(state => state.individuals);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      individuals: this.createIndividualsFormArray()
    });

    this.individuals$.subscribe(individuals => {
      this.form.setControl('individuals', this.createIndividualsFormArray());

      individuals.forEach(individual => {
        this.individualsFormArray.push(this.createIndividualFormGroup(individual));
      });
    });
  }

  createIndividualsFormArray(): FormArray {
    this.individualsFormArray = this.formBuilder.array([]);
    return this.individualsFormArray;
  }

  createIndividualFormGroup(individual: Individual): FormGroup {
    return this.formBuilder.group({
      id: individual.id,
      firstName: individual.firstName,
      lastName: individual.lastName
    });
  }

  addIndividual(): void {
    this.store.dispatch(new actions.AddIndividualAction({ id: UUID.UUID(), firstName: '', lastName: '' }));
  }

  updateIndividuals(): void {
    this.store.dispatch(new actions.SetIndividualsAction(this.form.value.individuals));
  }

  removeIndividual(id: string): void {
    this.store.dispatch(new actions.RemoveIndividualAction(id));
  }

  updateIndividual(value: any): void {
    this.store.dispatch(new actions.UpdateIndividualAction(value));
  }

  loadDefaultIndividuals(): void {
    this.store.dispatch(new actions.LoadIndividualsAction());
  }

  customTrackBy(index, individual: Individual) {
    return individual.id;
  }
}
