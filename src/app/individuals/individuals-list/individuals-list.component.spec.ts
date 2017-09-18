import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../../state/reducers';
import { IndividualsListComponent } from './individuals-list.component';
import { IndividualComponentMock } from '../individual/individual.component.mock';
import { AgeRequirementComponentMock } from '../age-requirement/age-requirement.component.mock';

describe('IndividualsListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        IndividualsListComponent,
        IndividualComponentMock,
        AgeRequirementComponentMock
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  it('should create individuals.component', async(() => {
    const fixture = TestBed.createComponent(IndividualsListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
