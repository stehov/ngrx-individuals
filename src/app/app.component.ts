import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducers from './state/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  store$: Observable<reducers.State>;

  constructor(private store: Store<reducers.State>) {
    this.store$ = this.store.select(value => value);
  }

  ngOnInit() { }
}
