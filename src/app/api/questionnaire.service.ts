import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

import { Question } from '../state/models/question.model';

const questions: Question = {
  text: 'Please answer the following questions',
  questions: [
    {
      id: UUID.UUID(),
      text: 'Are you awesome?',
      questions: [
        {
          text: 'Awesome. Please answer these follow-up questions',
          questions: [
            {
              id: UUID.UUID(),
              text: 'Are you sure?'
            },
            {
              id: UUID.UUID(),
              text: 'Are you having fun yet?'
            }
          ]
        }
      ]
    },
    {
      id: UUID.UUID(),
      text: 'Do you love this app?'
    }
  ]
};

@Injectable()
export class QuestionnaireService {

  all(): Observable<Question> {
    return new Observable((observer) => {
      observer.next(questions);
    });
  }
}
