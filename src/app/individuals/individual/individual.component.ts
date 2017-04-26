import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { Individual } from '../../state/models/individual.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualComponent implements OnInit {
  form: FormGroup;
  @Input() individual: Individual;
  @Output() updateIndividual: EventEmitter<Individual> = new EventEmitter<Individual>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.handleChanges();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: this.individual.id,
      firstName: this.individual.firstName,
      lastName: this.individual.lastName,
      age: this.individual.age
    });
  }

  handleChanges() {
    this.form.valueChanges
      .debounceTime(350)
      .subscribe(value => {
        this.onIndividualUpdated(value);
      });
  }

  onIndividualUpdated(value) {
    this.updateIndividual.emit({ id: value.id, firstName: value.firstName, lastName: value.lastName, age: value.age });
  }
}
