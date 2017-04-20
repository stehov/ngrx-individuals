import { NgModule, Directive, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Data, Params } from '@angular/router';
import { createObservable } from './testing-helpers';

export class RouterMock {
  navigateByUrl() {
  }
}

export class ActivatedRouteMock {
  data: Observable<Data> = createObservable({});
  queryParams: Observable<Params> = createObservable({});
}

@Directive({
  selector: 'router-outlet'
})
export class RouterOutletDirectiveMock {
}

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkDirectiveMock {
  @Input() routerLink: any;
  onClick() { }
}

@NgModule({
  declarations: [
    RouterOutletDirectiveMock,
    RouterOutletDirectiveMock,
    RouterLinkDirectiveMock
  ]
})
export class RouterDirectiveMocks {
}
