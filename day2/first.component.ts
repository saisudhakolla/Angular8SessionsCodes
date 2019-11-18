
import {Component} from '@angular/core';

@Component({
    selector:'first-cmp',
    template:`<h1> 
      {{firstName}} {{lastName}}

      {{2 + 3 }}
    </h1>`,  
    styles:[]  
})
export class FirstComponent
{
     firstName:string;
     lastName:string;

     constructor()
     {
        console.log("constructor of FirstComponent called");

         this.firstName="paul";
         this.lastName="sam";
     }
}

//convert the class into a comp