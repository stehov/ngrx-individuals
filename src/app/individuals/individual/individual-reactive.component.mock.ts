import { FormGroup } from '@angular/forms';
import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-individual-reactive',
  template: ''
})
export class IndividualReactiveComponentMock {
  @Input('formGroup') form: FormGroup;
}

@NgModule({
  declarations: [IndividualReactiveComponentMock]
})
export class IndividualReactiveComponentMockModule {
}
