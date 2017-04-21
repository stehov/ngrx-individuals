import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-individuals',
  template: ''
})
export class IndividualsComponentMock {
  @Input() individual: any;
  @Output('updateindividual') updateindividualEmitter: EventEmitter<any> = new EventEmitter<any>();
}

@NgModule({
  declarations: [IndividualsComponentMock]
})
export class IndividualsComponentMockModule {
}
