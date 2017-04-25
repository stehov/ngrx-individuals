import { NgModule, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-age-requirement',
  template: ''
})
export class AgeRequirementComponentMock {
  @Input() set allowUnderageIndividuals(allowUnderageIndividuals) {
    this.allowUnderageIndividualsValue = allowUnderageIndividuals;
  }
  allowUnderageIndividualsValue: boolean;
  @Output('allowUnderageIndividualsValueChanged') allowUnderageIndividualsValueChangedEmitter = new EventEmitter<boolean>();
}

@NgModule({
  declarations: [AgeRequirementComponentMock]
})
export class AgeRequirementComponentMockModule {
}
