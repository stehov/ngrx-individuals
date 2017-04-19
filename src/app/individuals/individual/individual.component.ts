import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { Individual } from '../../state/models/individual.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualComponent implements OnInit {
  group: FormGroup;
  @Input() individual: Individual;
  @Output('removeindividual') removeindividualEmitter: EventEmitter<Individual> = new EventEmitter<Individual>();
  @Output('updateindividual') updateindividualEmitter: EventEmitter<Individual> = new EventEmitter<Individual>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.handleChanges();
  }

  initForm() {
    this.group = this.formBuilder.group({
      id: this.individual.id,
      firstName: this.individual.firstName,
      lastName: this.individual.lastName
    });
  }

  handleChanges() {
    this.group.valueChanges
      .debounceTime(350)
      .subscribe(value => {
        this.updateindividual(value);
      });
  }

  removeindividual(individual: Individual) {
    this.removeindividualEmitter.emit(this.individual);
  }

  updateindividual(value) {
    this.updateindividualEmitter.emit(value);
  }
}
