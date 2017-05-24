import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-individuals',
  template: ''
})
export class IndividualsComponentMock {
  @Input() individuals: any;
  @Output() individualAdded: EventEmitter<any> = new EventEmitter();
  @Output() individualRemoved: EventEmitter<any> = new EventEmitter();
  @Output() individualUpdated: EventEmitter<any> = new EventEmitter();
}

@NgModule({
  declarations: [IndividualsComponentMock]
})
export class IndividualsComponentMockModule {
}
