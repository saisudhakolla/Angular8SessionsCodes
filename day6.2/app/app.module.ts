import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HelloComponent } from './hello/hello.component';
import { PArent2Component } from './parent2/parent2.component';
import { UseValueTokensDemoComponent } from './use-value-tokens-demo/use-value-tokens-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HelloComponent,
    PArent2Component,
    UseValueTokensDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
