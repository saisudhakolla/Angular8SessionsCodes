import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsAllControlsComponent } from './reactive-forms-all-controls/reactive-forms-all-controls.component';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { TemplateFormsSimpleComponent } from './template-forms-simple/template-forms-simple.component';
import { ReactiveFormsSimpleComponent } from './reactive-forms-simple/reactive-forms-simple.component';
import { ReactiveFormswithDirectivesComponent } from './reactive-formswith-directives/reactive-formswith-directives.component';
import { AgeValidatorDirective } from './reactive-formswith-directives/age-validator.directive';
import { ErrorsComponent } from './reactive-formswith-directives/errors-component';
import { EmailValidatorDirective } from './reactive-formswith-directives/EmailValidatorDirective';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsAllControlsComponent,
    TemplateFormsSimpleComponent,
    ReactiveFormsSimpleComponent,
    ReactiveFormswithDirectivesComponent,
    ErrorsComponent,
    EmailValidatorDirective,
    AgeValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
