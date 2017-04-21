import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IndividualReactiveComponent } from './individual-reactive.component';

describe('IndividualReactiveComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        IndividualReactiveComponent
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  it('should create individual-reactive.component', async(() => {
    const fixture = TestBed.createComponent(IndividualReactiveComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
