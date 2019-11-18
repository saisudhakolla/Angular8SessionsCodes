import { Component, OnInit } from '@angular/core';
import { Hamburger,DoubleHamburger,CheeseHamburger } from '../multi.service';

@Component({
  selector: 'app-use-class-demo',
  templateUrl: './use-class-demo.component.html',
  styleUrls: ['./use-class-demo.component.css'],
  
  //providers:[Hamburger]
  
  providers: [{provide: Hamburger, 
    useClass: Hamburger}]

})
export class UseClassDemoComponent implements OnInit {
  result:string;
  constructor(h:Hamburger) { 
    this.result=h.type;
  }

  ngOnInit() {
  }

}
