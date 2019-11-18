import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'for-if',
    template:`
    
     <h3>Click here</h3><button (click)="toggle()">Toggle!</button>

    
     
    <!--
    <div *ngIf="show" *ngFor="let thing of data">
      {{log(thing)}}
      <span>{{thing.name}}</span>
    </div>
  -->

    <!--
  <ng-template [ngIf]="show">
  <div *ngFor="let thing of data">
    {{log(thing)}}
    <span>{{thing.name}}</span>
  </div>
</ng-template>
-->

    `
})

export class ForIfComponent implements OnInit {
   
  public data:any[] = [];
  public show:boolean = false;
   constructor() { }

    ngOnInit() {
    this.data = [
      { name: 'abc', id: 1 },
      { name: 'huo', id: 2 },
      { name: 'bar', id: 3 },
      { name: 'foo', id: 4 },
      { name: 'thing', id: 5 },
      { name: 'other', id: 6 },
    ]
  }

  toggle() {
    this.show = !this.show;
  }

  log(thing:any) {
    console.log(thing);
  }
}