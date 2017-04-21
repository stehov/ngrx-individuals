import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '../state/reducers';
import { IndividualsService } from '../state/services/individuals.service';
import { Individual } from '../state/models/individual.model';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualsComponent implements OnInit {
  individuals$: Observable<Individual[]> = this.individualsService.getIndividuals();
  store$ = this.store.select(store => store);
  form: FormGroup;
  individualsFormArray: FormArray;

  constructor(private individualsService: IndividualsService,
    private store: Store<State>,
    private formBuilder: FormBuilder) { }

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
    const individual = this.individualsService.initializeIndividual();
    this.individualsService.addIndividual(individual);
  }

  removeIndividual(id: string): void {
    this.individualsService.removeIndividual(id);
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
