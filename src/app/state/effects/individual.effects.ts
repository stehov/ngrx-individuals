import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as applicationForm from '../actions/application-form.actions';
import * as individual from '../actions/individual.actions';
import { IndividualsService } from '../../api/individuals.service';


@Injectable()
export class IndividualEffects {
  @Effect() load$ = this.actions$
    .ofType(individual.ActionTypes.LOAD_INDIVIDUALS)
    .switchMap(() => this.individualsService.all())
    .map(individuals => new individual.LoadIndividualsSuccessAction(individuals))
  ;

  @Effect() save$ = this.actions$
    .ofType(individual.ActionTypes.SET_INDIVIDUALS)
    .map(individuals => new applicationForm.SetSaved(true))
  ;

  constructor(
    private individualsService: IndividualsService,
    private actions$: Actions
  ) { }
}
