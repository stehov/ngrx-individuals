import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export const createObservable = (value: any): Observable<any> => {
  const subject = new BehaviorSubject(value);
  return subject.asObservable();
};
