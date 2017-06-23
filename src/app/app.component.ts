import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  individuals$: Observable<Individual[]>;
  store$ = this.store.select(store => store);

  constructor(private store: Store<reducers.State>,
    private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.individuals$ = store.select(state => state.individuals);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      individuals: ''
    });
  }

  onAddIndividual(): void {
    this.store.dispatch(new individualActions.AddIndividualAction({ id: UUID.UUID(), firstName: '', lastName: '', age: undefined }));
  }

  onRemoveIndividual(id: string): void {
    this.store.dispatch(new individualActions.RemoveIndividualAction(id));
  }

  onUpdateIndividual(value: any): void {
    this.store.dispatch(new individualActions.UpdateIndividualAction(value));
  }

  loadDefaultIndividuals(): void {
    this.store.dispatch(new individualActions.LoadIndividualsAction());
  }

  updateApplicationForm($event) {
    this.store.dispatch(new appFormActions.SetAllowUnderageIndividuals($event));
  }
}
