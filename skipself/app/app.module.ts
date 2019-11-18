 
 import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Child }   from './child.component';
import { Parent }   from './parent.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,Parent,Child ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
