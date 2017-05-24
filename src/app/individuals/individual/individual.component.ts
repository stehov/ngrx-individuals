import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
      age: ['', Validators.required]
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

  validate(c: FormControl) {
    return this.form.valid ? null : { invalidIndividual: true };
  }
}
