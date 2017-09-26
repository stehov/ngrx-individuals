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
import { ValidatorService } from '../../core/validator/validator.service';

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
export class IndividualComponent extends AbstractValueAccessor implements OnInit, OnChanges, Validator {
  @Input() submitted = false;
  @Input() minimumAge: number;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private store: Store<reducers.State>,
    private validatorService: ValidatorService) {
    super();
    this.initForm();
  }

  ngOnInit() {
    this.handleChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['minimumAge'] && !!changes['minimumAge'].currentValue) {
      this.form.get('age').clearValidators();
      this.form.get('age').setValidators(this.composeAgeValidator());
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: '',
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', this.composeAgeValidator()]
    });
  }

  composeAgeValidator() {
    return Validators.compose(
      [
        Validators.required,
        this.validatorService.individualAgeValidator(this.minimumAge)
      ]);
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

  validate(control: FormControl) {
    return this.form.valid ? null : { invalidIndividual: true };
  }
}
