import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { IndividualComponent } from './individuals/individual/individual.component';

import { individualsService } from './state/services/individuals.service';
import { reducer } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndividualsComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppRoutingModule
  ],
  providers: [
    individualsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
