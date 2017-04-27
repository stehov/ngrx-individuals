import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';

import * as reducers from '../state/reducers';
import * as individualActions from '../state/actions/individual.actions';
import { Individual } from '../state/models/individual.model';

import * as appFormActions from '../state/actions/application-form.actions';
import { ApplicationForm } from '../state/models/application-form';
import { INDIVIDUALS_VALIDATOR } from '../shared/individuals.validator';

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
    this.initForm();
    this.handleIndividualsChanges();
    this.handleApplicationFormChanges();
  }

  initForm() {
    this.form = this.formBuilder.group({
      individuals: this.createIndividualsFormArray()
    });
  }

  createIndividualsFormArray(): FormArray {
    this.individualsFormArray = this.formBuilder.array([]);
    return this.individualsFormArray;
  }

  initIndividualsFormArray(individuals: Individual[]) {
    this.form.setControl('individuals', this.createIndividualsFormArray());

    individuals.forEach(individual => {
      this.individualsFormArray.push(this.createIndividualControl(individual));
    });
  }

  createIndividualControl(individual: Individual): FormControl {
    return this.formBuilder.control(individual);
  }

  createIndividualFormGroup(individual: Individual): FormGroup {
    return this.formBuilder.group({
      id: individual.id,
      firstName: individual.firstName,
      lastName: individual.lastName,
      age: individual.age
    });
  }

  handleIndividualsChanges() {
    this.individuals$.subscribe(individuals => this.initIndividualsFormArray(individuals));
  }

  handleApplicationFormChanges() {
    this.applicationForm$.subscribe(applicationForm => {
      this.form.clearValidators();
      this.form.setValidators(INDIVIDUALS_VALIDATOR.individualsAgeValidator(applicationForm.allowUnderageIndividuals));
      this.form.updateValueAndValidity();
    });
  }

  addIndividual(): void {
    this.updateIndividuals(this.form.value);
    this.store.dispatch(new individualActions.AddIndividualAction({ id: UUID.UUID(), firstName: '', lastName: '', age: undefined }));
  }

  updateIndividuals(value: any): void {
    this.store.dispatch(new individualActions.SetIndividualsAction(value.individuals));
  }

  removeIndividual(id: string): void {
    this.updateIndividuals(this.form.value);
    this.store.dispatch(new individualActions.RemoveIndividualAction(id));
  }

  updateIndividual(value: any): void {
    this.store.dispatch(new individualActions.UpdateIndividualAction(value.individuals));
  }

  loadDefaultIndividuals(): void {
    this.store.dispatch(new individualActions.LoadIndividualsAction());
  }

  updateApplicationForm($event) {
    this.store.dispatch(new appFormActions.SetAllowUnderageIndividuals($event));
  }

  customTrackBy(index, item: FormControl) {
    return item.value.id;
  }
}
