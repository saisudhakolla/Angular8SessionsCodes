import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { RxjsIntro1Component } from './rxjs-intro1/rxjs-intro1.component';
import { RxjsIntro2Component } from './rxjs-intro2/rxjs-intro2.component';
import { UserBookingComponent } from './C2C-using-RXJS/User.component';
import { AdminBookingComponent } from './C2C-using-RXJS/Admin.component';
import { ReadJSONComponent } from './read-json/read-json.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadJSONAsyncComponent } from './read-jsonasync/read-jsonasync.component';
import { ForkJoinDemoComponent } from './fork-join-demo/fork-join-demo.component';
import { HttpCallsComponent } from './http-calls/http-calls.component';
import { ErrorDemsComponent } from './error-dems/error-dems.component';
import { MyExceptionHandler } from './GloablExceptionHandler';
import { ThrowErrorComponent } from './throwException.component';
import { SubjectDemosComponent } from './subject-demos/subject-demos.component';
import { Subject2Component } from './Subject2.component';
import { VCComponent } from './ViewChildChanges.component';
import { ParentComponent } from './Parent.component';
import { ChildComponent } from './child.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RxjsIntro1Component,
    RxjsIntro2Component,
    UserBookingComponent,
    AdminBookingComponent,
    ReadJSONComponent,
    ReadJSONAsyncComponent,
    ForkJoinDemoComponent,
    HttpCallsComponent,
     ErrorDemsComponent,
     ThrowErrorComponent, 
     SubjectDemosComponent,Subject2Component,VCComponent,
     ParentComponent,ChildComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [{provide: ErrorHandler, useClass: MyExceptionHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
