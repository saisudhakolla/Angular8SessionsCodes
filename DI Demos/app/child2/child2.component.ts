import { Component, OnInit } from '@angular/core';
import {RandomService} from '../random.service'
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers:[RandomService]

})
export class Child2Component implements OnInit {

  randomNo:number;
  constructor(rs:RandomService) 
  { 
  this.randomNo=rs.result;
  }

  ngOnInit() {
  }

}
