import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromQuestionnaire from '../actions/questionnaire.actions';
import * as reducers from '../reducers';
import { QuestionnaireService } from '../../api/questionnaire.service';

@Injectable()
export class QuestionnaireEffects {

  @Effect() load$ = this.actions$
    .ofType(fromQuestionnaire.LOAD)
    .switchMap(() => this.questionnaireService.all())
    .map(questionnaire => new fromQuestionnaire.LoadSuccess(questionnaire))
  ;

  constructor(
    private questionnaireService: QuestionnaireService,
    private actions$: Actions,
    private store: Store<reducers.State>
  ) { }
}
