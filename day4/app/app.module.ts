import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstComponent} from './first.component';
import { HelloComponent } from './hello/hello.component';
import { BindingsDemoComponent } from './Bindings/bindings-demo/bindings-demo.component';
import { FormsModule } from '@angular/forms';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { NgForExampleComponent } from './ForDemo.component';
import { ForIfComponent } from './ForIF.component';
import { TemplateDemoComponent } from './TemplateBinding.component';
import { TrackComponent } from './trackbyDemo.component';
import { TemplateDemosComponent } from './template-demos/template-demos.component';
import { ImPureSortPipe } from './PipesDemos/ImpureSort.pipe';
import { PureSortPipe } from './PipesDemos/PureSort.pipe';
import { CustomPipesDemoComponent } from './PipesDemos/CustomPipe.component';
import { AttributeComponent } from './AttributeDirectives.component';
import { Attribute2Component } from './AttributeDirective2.component';
import { MakeitboldDirective } from './makeitbold.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent, 
    HelloComponent, 
    BindingsDemoComponent, 
    DirectivesDemoComponent,
    NgForExampleComponent,
    ForIfComponent,
    TemplateDemoComponent,
    TrackComponent,
    TemplateDemosComponent,
    ImPureSortPipe,
    PureSortPipe,
    CustomPipesDemoComponent,
    AttributeComponent,
    Attribute2Component,
    MakeitboldDirective,
    ReversePipe
     
  ],
  imports: [
    BrowserModule,FormsModule
  ], //global imports of Modules only
  providers: [], //DI
  bootstrap: [AppComponent]
})
export class AppModule { }
