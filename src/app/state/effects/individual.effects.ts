import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as applicationForm from '../actions/application-form.actions';
import * as fromIndividual from '../actions/individual.actions';
import * as reducers from '../reducers';
import { IndividualsService } from '../../api/individuals.service';

@Injectable()
export class IndividualEffects {

  @Effect() load$ = this.actions$
    .ofType(fromIndividual.LOAD_INDIVIDUALS)
    .switchMap(() => this.individualsService.all())
    .map(individuals => new fromIndividual.LoadIndividualsSuccessAction(individuals))
  ;

  @Effect({ dispatch: false }) removeById$ = this.actions$
    .ofType(fromIndividual.REMOVE_INDIVIDUAL_BY_ID)
    .map((action: fromIndividual.RemoveIndividualByIdAction) => action.payload)
    .withLatestFrom(this.store.select(reducers.getIndividualEntities))
    .map(([individualId, individualEntities]) => {
      const individualToRemove = individualEntities[individualId];

      if (!!individualToRemove) {
        this.store.dispatch(new fromIndividual.RemoveIndividualAction(individualToRemove));
      }
    });

  constructor(
    private individualsService: IndividualsService,
    private actions$: Actions,
    private store: Store<reducers.State>
  ) { }
}
