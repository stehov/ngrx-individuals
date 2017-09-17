import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';

import * as reducers from './state/reducers';
import * as individualActions from './state/actions/individual.actions';
import { Individual } from './state/models/individual.model';

import * as appFormActions from './state/actions/application-form.actions';
import { ApplicationForm } from './state/models/application-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  individuals$: Observable<Individual[]>;
  store$ = this.store.select(store => store);
  submitted = false;

  constructor(private store: Store<reducers.State>,
    private formBuilder: FormBuilder) {
    this.individuals$ = store.select(reducers.getIndividuals);
  }

  ngOnInit() { }

  loadDefaultIndividuals(): void {
    this.store.dispatch(new individualActions.LoadIndividualsAction());
  }

  updateApplicationForm($event) {
    this.store.dispatch(new appFormActions.SetMinimumAge($event));
  }

  submit(individualsValid: boolean) {
    this.submitted = true;

    console.log('individuals valid?', individualsValid);
  }
}
