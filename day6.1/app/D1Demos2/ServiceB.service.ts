import { Injectable } from '@angular/core';
import { ServiceC } from './servicec.service';
 
@Injectable()
export class ServiceB  {
 y:string;

  constructor(sc:ServiceC) //Constructor based DI
  
  {
   console.log("constructor of Class B called");
    this.y="message from BEngin class" + "  " + sc.x;

   }
}