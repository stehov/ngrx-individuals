import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { IndividualComponent } from './individuals/individual/individual.component';

import { IndividualEffects } from './state/effects/individual.effects';
import { IndividualsService } from './api/individuals.service';
import { reducers } from './state/reducers';
import { AgeRequirementComponent } from './individuals/age-requirement/age-requirement.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualsComponent,
    IndividualComponent,
    AgeRequirementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([IndividualEffects]),
  ],
  providers: [
    IndividualsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
