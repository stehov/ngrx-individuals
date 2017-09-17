import { OnChanges, SimpleChanges, Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducers from '../../state/reducers';
import { AbstractValueAccessor } from '../../shared/abstract-value-accessor';
import { Individual } from '../../state/models/individual.model';

const INDIVIDUAL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IndividualComponent),
  multi: true
};

const INDIVIDUAL_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IndividualComponent),
  multi: true
};

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  providers: [
    INDIVIDUAL_VALUE_ACCESSOR,
    INDIVIDUAL_VALIDATORS
  ]
})
export class IndividualComponent extends AbstractValueAccessor implements OnInit, Validator {
  @Input() submitted = false;
  @Input() minimumAge: number;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private store: Store<reducers.State>) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.handleChanges();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: '',
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, this.individualAgeValidator.bind(this)])]
    });
  }

  writeValue(value): void {
    this.form.patchValue(value, { emitEvent: false });
  }

  handleChanges() {
    this.form.valueChanges
      .subscribe(value => {
        this.value = value;
      });
  }

  hasError(controlName: string, errorName?: string) {
    return ((!errorName && this.form.get(controlName).invalid) ||
      this.form.get(controlName).hasError(errorName)) &&
      (this.form.get(controlName).touched || this.submitted);
  }

  individualAgeValidator(c: AbstractControl) {
    return !this.minimumAge || +c.value >= this.minimumAge ? null : { individualMinimumAge: true };
  };

  validate(c: FormControl) {
    return this.form.valid ? null : { invalidIndividual: true };
  }
}
