import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as reducers from '../../state/reducers';
import * as fromApplicationForm from '../../state/actions/application-form.actions';

@Component({
  selector: 'app-age-requirement',
  templateUrl: './age-requirement.component.html'
})
export class AgeRequirementComponent implements OnInit {
  minimumAge: number;

  constructor(private store: Store<reducers.State>) { }

  ngOnInit() {
    this.store.select(reducers.getMinimumAge)
      .take(1)
      .subscribe(value => this.minimumAge = value);
  }

  minimumAgeChanged(value) {
    this.store.dispatch(new fromApplicationForm.SetMinimumAge(+value));
  }
}
