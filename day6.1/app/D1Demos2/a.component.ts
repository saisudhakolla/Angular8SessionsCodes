import { Component, OnInit } from '@angular/core';
import { ServiceA } from './serviceA.service';

@Component({
  selector: 'app-didemo',
  template:`
  <p>{{result}}</p>
  `
})
export class DIDemo2Component implements OnInit {
result:string;
 
constructor(sa:ServiceA) 
  { 
  console.log("constructor of DI cmp called");
  this.result=sa.z;
  }

  ngOnInit() {
  }

}
