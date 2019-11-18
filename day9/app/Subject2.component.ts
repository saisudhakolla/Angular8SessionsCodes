
import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
const subject=new Subject<number>();
@Component({
    selector: 'subject2-cmp',
    template: `
    
    `
})

export class Subject2Component implements OnInit {
    
    constructor() { }

     

    ngOnInit() {
subject.subscribe(
    {next:(x)=>console.log("first observer" + x) }
    );

    subject.subscribe(
        {next:(y)=>console.log("sec observer" + y)}
        );

subject.next(1);
subject.next(2);


     }
}
