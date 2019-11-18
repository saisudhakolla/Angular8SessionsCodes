import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  result:number;
  datafromChild:string;

  generateRandom()
  {
    this.result=Math.random();
  }

  getDatafromChild(str:string)
  {
this.datafromChild=str;
  }

  constructor() { }

  ngOnInit() {
  }

}
