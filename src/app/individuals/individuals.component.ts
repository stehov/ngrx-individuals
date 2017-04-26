import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';

import * as reducers from '../state/reducers';
import * as individualActions from '../state/actions/individual.actions';
import { Individual } from '../state/models/individual.model';

import * as appFormActions from '../state/actions/application-form.actions';
import { ApplicationForm } from '../state/models/application-form';

const individualsAgeValidator = (allowUnderageIndividuals) => {
  return (form: AbstractControl): ValidationErrors | null => {
    let individual18OrOverExists: boolean;

    if (allowUnderageIndividuals) {
      return null;
    }

    const individualsArray = form.get('individuals') as FormArray;

    individualsArray.controls.forEach(individualFormGroup => {
      const age = individualFormGroup.get('age').value;
      if (age && +age >= 18) {
        individual18OrOverExists = true;
      }
    });

    return !individual18OrOverExists ? {individualArrayValidatorError: true} : null;
  };
};

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualsComponent implements OnInit {
  individuals$: Observable<Individual[]>;
  applicationForm$: Observable<ApplicationForm>;
  store$ = this.store.select(store => store);
  form: FormGroup;
  individualsFormArray: FormArray;

  constructor(private store: Store<reducers.State>,
              private formBuilder: FormBuilder) {
    this.individuals$ = store.select(state => state.individuals);
    this.applicationForm$ = store.select(state => state.applicationForm);
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

    this.applicationForm$.subscribe(applicationForm => {
      this.form.clearValidators();
      this.form.setValidators(individualsAgeValidator(applicationForm.allowUnderageIndividuals));
      this.form.updateValueAndValidity();
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
      lastName: individual.lastName,
      age: individual.age
    });
  }

  addIndividual(): void {
    this.store.dispatch(new individualActions.AddIndividualAction({id: UUID.UUID(), firstName: '', lastName: '', age: undefined}));
  }

  updateIndividuals(value: any): void {
    this.store.dispatch(new individualActions.SetIndividualsAction(value));
  }

  removeIndividual(id: string): void {
    this.store.dispatch(new individualActions.RemoveIndividualAction(id));
  }

  updateIndividual(value: any): void {
    this.store.dispatch(new individualActions.UpdateIndividualAction(value));
  }

  loadDefaultIndividuals(): void {
    this.store.dispatch(new individualActions.LoadIndividualsAction());
  }

  updateApplicationForm($event) {
    this.store.dispatch(new appFormActions.SetAllowUnderageIndividuals($event));
  }

  customTrackBy(index, individual: Individual) {
    return individual.id;
  }
}
