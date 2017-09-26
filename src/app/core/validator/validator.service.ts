import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidatorService {

  constructor() { }

  individualAgeValidator(minimumAge): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return !minimumAge || +control.value >= minimumAge ? null : { individualMinimumAge: true };
    };
  }
}
