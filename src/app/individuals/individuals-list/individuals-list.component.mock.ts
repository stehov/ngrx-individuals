import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-individuals-list',
  template: ''
})
export class IndividualsListComponentMock {
  @Input() individuals: any;
  @Output() individualAdded: EventEmitter<any> = new EventEmitter();
  @Output() individualRemoved: EventEmitter<any> = new EventEmitter();
  @Output() individualUpdated: EventEmitter<any> = new EventEmitter();
}

@NgModule({
  declarations: [IndividualsListComponentMock]
})
export class IndividualsComponentMockModule {
}
