import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demos',
  templateUrl: './template-demos.component.html',
  styleUrls: ['./template-demos.component.css']
})
export class TemplateDemosComponent implements OnInit {
  showContents:boolean=false;
  public items:any[] = [];

  constructor() { }
  ngOnInit() {
    this.items = [
      { name: 'abc', id: 1 },
      { name: 'huo', id: 2 },
      { name: 'bar', id: 3 },
      { name: 'foo', id: 4 },
      { name: 'thing', id: 5 },
      { name: 'other', id: 6 },
    ]
  }

  toggle() {
    this.showContents = !this.showContents;
  }


}
