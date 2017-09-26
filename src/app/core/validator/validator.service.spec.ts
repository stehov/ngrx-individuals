import { TestBed, inject } from '@angular/core/testing';
import { ValidatorFn } from '@angular/forms';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let individualAgeValidator: ValidatorFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('should be created', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should validate minimum age', inject([ValidatorService], (service: ValidatorService) => {
    individualAgeValidator = service.individualAgeValidator(18);

    const validValid: any = { value: 19 };

    expect(individualAgeValidator(validValid)).toBe(null);

    const invalidValid: any = { value: 17 };

    expect(individualAgeValidator(invalidValid)).toBeTruthy();
  }));
});
