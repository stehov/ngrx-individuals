import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormArray, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AbstractValueAccessor } from '../shared/abstract-value-accessor';
import { Individual } from '../state/models/individual.model';

const INDIVIDUALS_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IndividualsComponent),
  multi: true
};

const INDIVIDUALS_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IndividualsComponent),
  multi: true
};

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  providers: [
    INDIVIDUALS_VALUE_ACCESSOR,
    INDIVIDUALS_VALIDATORS
  ]
})
export class IndividualsComponent extends AbstractValueAccessor implements OnInit, OnDestroy, Validator {
  @Input() individuals: Observable<Individual[]>;
  @Output() individualAdded: EventEmitter<any> = new EventEmitter();
  @Output() individualRemoved: EventEmitter<string> = new EventEmitter();
  @Output() individualUpdated: EventEmitter<Individual> = new EventEmitter();
  individualsSubscription: Subscription;
  individualsFormArray: FormArray;

  constructor() {
    super();
  }

  ngOnInit() {
    this.individualsFormArray = this.createIndividualsFormArray();
    this.handleChanges();
    this.setUpSubscriptions();
  }

  ngOnDestroy() {
    this.individualsSubscription.unsubscribe();
  }

  setUpSubscriptions() {
    this.individualsSubscription = this.individuals.subscribe(individuals => {
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
      .debounceTime(350)
      .subscribe(value => {
        this.individualUpdated.emit(value);
      });

    return individualControl;
  }

  handleChanges() {
    this.individualsFormArray.valueChanges
      .subscribe(value => {
        this.value = value;
      });
  }

  addIndividual(): void {
    this.individualAdded.emit();
  }

  removeIndividual(id: string): void {
    this.individualRemoved.emit(id);
  }

  validate(c: FormControl) {
    return this.individualsFormArray.valid ? null : { incompleteApplicants: true };
  }

  customTrackBy(index, item: FormControl) {
    return item.value.id;
  }
}
