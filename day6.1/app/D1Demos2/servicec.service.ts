import { Injectable } from '@angular/core';

@Injectable()
export class ServiceC  { //fuel
   x:string;
  constructor() 
  {
    console.log("constructor of Class C called");
    this.x="message from Cfuel";

   }
}