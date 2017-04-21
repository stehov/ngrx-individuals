import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-individual',
  template: ''
})
export class IndividualComponentMock {
  @Input() individual: any;
  @Output('updateIndividual') updateIndividualEmitter: EventEmitter<any> = new EventEmitter<any>();
}

@NgModule({
  declarations: [IndividualComponentMock]
})
export class IndividualComponentMockModule {
}
