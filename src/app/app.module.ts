import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { IndividualComponent } from './individuals/individual/individual.component';
import { IndividualReactiveComponent } from './individuals/individual/individual-reactive.component';

import { IndividualEffects } from './state/effects/individual.effects';
import { IndividualsService } from './api/individuals.service';
import { reducer } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    IndividualsComponent,
    IndividualComponent,
    IndividualReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(IndividualEffects),
  ],
  providers: [
    IndividualsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
