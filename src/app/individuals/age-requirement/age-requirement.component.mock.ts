import { NgModule, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-age-requirement',
  template: ''
})
export class AgeRequirementComponentMock {
  @Input() minimumAge: number;
}

@NgModule({
  declarations: [AgeRequirementComponentMock]
})
export class AgeRequirementComponentMockModule {
}
