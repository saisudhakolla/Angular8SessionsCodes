import { Injectable } from '@angular/core';
import { ServiceB } from './ServiceB.service';

@Injectable()
export class ServiceA {
z:string;
  constructor(sb:ServiceB) 
  {
    console.log("constructor of service A called");
 this.z= "message from CarService "+ " " + sb.y;
   }
}