 

import {Component} from '@angular/core';
import {Service} from './service';
import {Child} from './child.component';

@Component({
  selector : 'parent',
  template : '<child></child>',
   
  providers : [Service]
})
export class Parent {
  constructor(svc: Service) {
    svc.someProp = 'Parent instance';
  }
}