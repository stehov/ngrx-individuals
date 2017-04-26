import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
