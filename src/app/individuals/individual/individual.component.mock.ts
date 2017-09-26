import { NgModule, Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual',
  template: ''
})
export class IndividualComponentMock {
  @Input() individual: any;
}

@NgModule({
  declarations: [IndividualComponentMock]
})
export class IndividualComponentMockModule {
}
