import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../state/reducers';
import { IndividualsComponent } from './individuals.component';
import { IndividualComponentMock } from './individual/individual.component.mock';
import { AgeRequirementComponentMock } from './age-requirement/age-requirement.component.mock';

describe('IndividualsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        IndividualsComponent,
        IndividualComponentMock,
        AgeRequirementComponentMock
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  it('should create individuals.component', async(() => {
    const fixture = TestBed.createComponent(IndividualsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
