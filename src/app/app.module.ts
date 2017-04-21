import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { IndividualComponent } from './individuals/individual/individual.component';
import { IndividualReactiveComponent } from './individuals/individual/individual-reactive.component';

import { IndividualsService } from './state/services/individuals.service';
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
  ],
  providers: [
    IndividualsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
