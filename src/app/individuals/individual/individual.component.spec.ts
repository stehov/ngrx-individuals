import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IndividualComponent } from './individual.component';

describe('IndividualComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        IndividualComponent
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  it('should create individual-reactive.component', async(() => {
    const fixture = TestBed.createComponent(IndividualComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
