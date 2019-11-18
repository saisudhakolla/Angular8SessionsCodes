import {Component, Directive, Host, SkipSelf,Injector} from '@angular/core';
import {Service} from './service';

@Component({
  selector : 'child',
  template : '<h1> have a look @ ur console </h1>',
  providers : [Service]
})
export class Child {
    //SkipSelf decorator will restrict the provider lookup to parent->grandparent->ancestor parent
 constructor(@SkipSelf() pSvc: Service, svc: Service,injector:Injector)
  { 
  
    console.log('instance of ', pSvc.someProp);
    console.log('instance of', svc.someProp);
    injector.get()   ;


  } 


  
}