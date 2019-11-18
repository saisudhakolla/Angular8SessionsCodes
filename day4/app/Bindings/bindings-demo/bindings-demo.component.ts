import { Component, OnInit } from '@angular/core';
//import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-bindings-demo',
  templateUrl: './bindings-demo.component.html',
  styleUrls: ['./bindings-demo.component.css']
})
export class BindingsDemoComponent implements OnInit {
  hide:boolean;
  
  constructor() { }
name:string;

  ngOnInit() {
    this.name="Ram";
  }

  f1(e1:MouseEvent,e2:KeyboardEvent)
  {
    alert ("f1 called");
    console.log(e1);
    console.log(e2);
  }

  f2()
  {
    alert ("f2 called");
     
  }

}
