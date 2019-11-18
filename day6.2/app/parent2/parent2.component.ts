import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {HelloComponent} from '../hello/hello.component'
@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class PArent2Component implements OnInit {

  @ViewChildren(HelloComponent,null) helloChildren: QueryList<HelloComponent>;
  @ViewChild('last',null) lastChild: HelloComponent;

  constructor() {}

  onClickAll() {
    this.helloChildren.forEach((child) => child.randomizeColor());
  }

  onClickLast() {
    this.lastChild.randomizeColor();
  }

  ngOnInit() {
  }

}
