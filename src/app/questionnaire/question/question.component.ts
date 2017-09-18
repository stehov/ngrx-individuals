import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Question } from '../../state/models/question.model';
import { Individual } from '../../state/models/individual.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() parentQuestion: Question;
  @Input() individual: Individual;
  @Input() parentForm: FormGroup;
  @Input() form: FormGroup;
  @Input() submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('i', this.individual);

    if (!!this.individual) {
      if (!this.parentForm.get(this.individual.id)) {
        this.parentForm.addControl(this.individual.id, this.formBuilder.group({}));
      }

      this.form = this.parentForm.get(this.individual.id) as FormGroup;

      if (!!this.question.id && !!this.individual) {
        this.form.addControl(
          this.question.id,
          this.formBuilder.control('', Validators.required)
        );
      }
    }
  }

  hasError(controlName: string, errorName?: string) {
    return ((!errorName && this.form.get(controlName).invalid) ||
      this.form.get(controlName).hasError(errorName)) &&
      (this.form.get(controlName).touched || this.submitted);
  }
}
