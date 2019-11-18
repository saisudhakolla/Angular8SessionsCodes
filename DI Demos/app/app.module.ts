import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 
 
 
import { ServiceA } from './D1Demos2/serviceA.service';
import { ServiceB } from './D1Demos2/ServiceB.service';
import { ServiceC } from './D1Demos2/servicec.service';
import { DIDemo2Component } from './D1Demos2/a.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RandomService } from './random.service';
import { UseClassDemoComponent } from './use-class-demo/use-class-demo.component';
import { Hamburger, DoubleHamburger, CheeseHamburger } from './multi.service';

@NgModule({
  declarations: [
    AppComponent,DIDemo2Component, ParentComponent, Child1Component, Child2Component, UseClassDemoComponent
     
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ServiceA,
    ServiceB,
    ServiceC,
    RandomService,
    Hamburger,
    DoubleHamburger,
    CheeseHamburger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
