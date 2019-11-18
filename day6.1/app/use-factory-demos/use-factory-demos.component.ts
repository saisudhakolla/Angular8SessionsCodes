import { Component, OnInit } from '@angular/core';

import {Hamburger,DoubleHamburger,CheeseHamburger} from '../multi.service';

import {x} from '../../environments/environment'
const isProd = true;
//const Btype=x;

export let BurgerServiceProviderFac =
  { 
    provide: Hamburger,
              
           //factory based provider
 useFactory: () => {
    
    if (x.burgerType=='DoubleHamBurger') 
    {
      return new DoubleHamburger();
    } 
    else 
    {
      return new CheeseHamburger();
    }
  }

         };
        

@Component({
  selector: 'app-use-factory-demos',
  templateUrl: './use-factory-demos.component.html',
  styleUrls: ['./use-factory-demos.component.css'],
  providers:[DoubleHamburger,
    Hamburger,
    CheeseHamburger,
    BurgerServiceProviderFac]
})
export class UseFactoryDemosComponent implements OnInit {

  result:string; 
  constructor(b:Hamburger) 
  { 
    console.log(b);
     this.result=b.type;
  }


  ngOnInit() {
  }

}
