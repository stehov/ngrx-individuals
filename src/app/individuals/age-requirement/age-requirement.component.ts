import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import * as reducers from '../../state/reducers/index';

@Component({
  selector: 'app-age-requirement',
  templateUrl: './age-requirement.component.html'
})
export class AgeRequirementComponent implements OnInit {
  @Input() set allowUnderageIndividuals(allowUnderageIndividuals) {
    this.allowUnderageIndividualsValue = allowUnderageIndividuals;
  }
  allowUnderageIndividualsValue: boolean;
  @Output('allowUnderageIndividualsValueChanged') allowUnderageIndividualsValueChangedEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  checkboxValueChanged(value: boolean) {
    this.allowUnderageIndividualsValueChangedEmitter.emit(value);
  }
}
