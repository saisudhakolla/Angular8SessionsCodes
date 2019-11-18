import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() randomNo:number;

 @Output() notify: EventEmitter<string>=
       new EventEmitter<string>();

       triggerCustomEvent()
       {
         this.notify.emit(new Date().getTime().toString())
       }

  constructor() { }

  ngOnInit() {
  }

}
