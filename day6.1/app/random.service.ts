import { Injectable } from '@angular/core';

 @Injectable()
export class RandomService {
 result:number;
  constructor() 
  { 
      this.result=Math.random();
  }
}
