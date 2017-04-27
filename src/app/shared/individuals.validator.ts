import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

function individualsAgeValidator(allowUnderageIndividuals): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    let individual18OrOverExists: boolean;

    if (allowUnderageIndividuals) {
      return null;
    }

    const individualsArray = c.get('individuals') as FormArray;

    individualsArray.controls.forEach(individual => {
      const age = +individual.value.age;

      if (age && +age >= 18) {
        individual18OrOverExists = true;
      }
    });

    return !individual18OrOverExists ? { individualArrayValidatorError: true } : null;
  };
};

export const INDIVIDUALS_VALIDATOR = {
  individualsAgeValidator: individualsAgeValidator
};
