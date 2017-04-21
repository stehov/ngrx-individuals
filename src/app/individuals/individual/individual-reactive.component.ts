import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { Individual } from '../../state/models/individual.model';

@Component({
  selector: 'app-individual-reactive',
  templateUrl: './individual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualReactiveComponent implements OnInit {
  @Input('formGroup') form: FormGroup;

  ngOnInit() {
  }
}
