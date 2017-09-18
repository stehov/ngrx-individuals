import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as reducers from '../state/reducers';
import { Question } from '../state/models/question.model';
import { Individual } from '../state/models/individual.model';
import * as fromQuestionnaire from '../state/actions/questionnaire.actions';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent implements OnInit {
  individuals$: Observable<Individual[]>;
  questionnaire$: Observable<Question>;
  submitted = false;
  form: FormGroup;

  constructor(private store: Store<reducers.State>,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.individuals$ = this.store.select(reducers.getIndividuals);
    this.questionnaire$ = this.store.select(reducers.getQuestionnaire);
  }

  ngOnInit() {
    this.form = new FormGroup({});
    this.store.dispatch(new fromQuestionnaire.Load());
  }

  back() {
    this.router.navigateByUrl('individuals');
  }

  submit() {
    this.submitted = true;
  }
}
