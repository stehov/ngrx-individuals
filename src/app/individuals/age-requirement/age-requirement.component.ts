import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-age-requirement',
  templateUrl: './age-requirement.component.html'
})
export class AgeRequirementComponent implements OnInit {
  allowUnderageIndividualsValue: boolean;
  @Input() set allowUnderageIndividuals(allowUnderageIndividuals) {
    this.allowUnderageIndividualsValue = allowUnderageIndividuals;
  }
  @Output() allowUnderageIndividualsValueChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  checkboxValueChanged(value: boolean) {
    this.allowUnderageIndividualsValueChanged.emit(value);
  }
}
