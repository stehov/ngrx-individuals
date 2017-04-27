import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { AbstractValueAccessor } from '../../shared/abstract-value-accessor';
import { Individual } from '../../state/models/individual.model';

const INDIVIDUAL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IndividualComponent),
  multi: true
};

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  providers: [
    INDIVIDUAL_VALUE_ACCESSOR
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualComponent extends AbstractValueAccessor implements OnInit {
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
      firstName: '',
      lastName: '',
      age: ''
    });
  }

  writeValue(value): void {
    this.form.patchValue(value);
  }

  handleChanges() {
    this.form.valueChanges
      .subscribe(value => {
        this.value = value;
      });
  }
}
