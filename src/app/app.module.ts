import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { NameDisplayComponent } from './components/name-display/name-display.component';
import { NameFormComponent } from './components/name-form/name-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent,
    NameDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
