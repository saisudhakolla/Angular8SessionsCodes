import { Component, OnInit ,Inject,InjectionToken} from '@angular/core';
import {Hamburger,DoubleHamburger,CheeseHamburger} 
       from '../multiService';


       //name collision w.r.t strings in Angular
       //const token1:string="someKey";
      // const token2:string="someKey";

//how to avoid name collision

//injectionToken => immutable
const token1 = new InjectionToken("SomeKey"); // avoid NAme collision
const token2 = new InjectionToken("SomeKey");// // avoid NAme collision


@Component({
  selector: 'app-use-value-tokens-demo',
  templateUrl: './use-value-tokens-demo.component.html',
  styleUrls: ['./use-value-tokens-demo.component.css'],
  providers:[
    {provide: token1, useClass: Hamburger},
    {provide: token2, useClass: DoubleHamburger}
  ]
})
export class UseValueTokensDemoComponent implements OnInit {

  constructor(@Inject(token1) h1:any,
               @Inject(token2) h2:any) 
  {
    console.log(h1===h2);

    console.log(h1.burgerType);
    console.log(h1);
    console.log(h2);
  }

  ngOnInit() {
  }

}
