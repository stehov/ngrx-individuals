import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IndividualsListComponent } from './individuals/individuals-list/individuals-list.component';
import { IndividualComponent } from './individuals/individual/individual.component';

import { IndividualEffects } from './state/effects/individual.effects';
import { QuestionnaireEffects } from './state/effects/questionaire.effects';
import { IndividualsService } from './api/individuals.service';
import { QuestionnaireService } from './api/questionnaire.service';
import { reducers } from './state/reducers';
import { AgeRequirementComponent } from './individuals/age-requirement/age-requirement.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './questionnaire/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualsListComponent,
    IndividualComponent,
    AgeRequirementComponent,
    IndividualsComponent,
    QuestionnaireComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      IndividualEffects,
      QuestionnaireEffects
    ]),
  ],
  providers: [
    IndividualsService,
    QuestionnaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
