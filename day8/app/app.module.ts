import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    HttpCallsComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
