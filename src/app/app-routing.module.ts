import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualsComponent } from './individuals/individuals.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'individuals',
    pathMatch: 'full'
  },
  {
    path: 'individuals',
    component: IndividualsComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
