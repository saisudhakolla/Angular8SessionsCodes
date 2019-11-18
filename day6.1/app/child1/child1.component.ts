import { Component, OnInit } from '@angular/core';
import {RandomService} from '../random.service'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 randomNo:number;
  constructor(rs:RandomService) 
  { 
  this.randomNo=rs.result;
  }

  ngOnInit() {
  }

}
