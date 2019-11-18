import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-demos',
  //encapsulation:ViewEncapsulation.Emulated,//is default
 //encapsulation:ViewEncapsulation.Native ,
  //encapsulation:ViewEncapsulation.ShadowDom,
  encapsulation:ViewEncapsulation.None,

  template:`
  <div class="test">
  <div>
    Title: 
  </div>
  <input type="text" [(ngModel)]="title">
</div>
  `,

  styles: [`
    .test {
      padding: 20px;
       
      background:red;
      border-style:dotted  
    }
  `]
})
export class ViewEncapsulationDemosComponent implements OnInit {

  constructor() { }
title:string="Ddfsdf";
  ngOnInit() {
  }

}
