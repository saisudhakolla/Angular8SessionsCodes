
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'throw-err-cmp',
    template: `
    <button type="button" (click)="buttonClicked()">Throw me some exception, plz.</button>
    <button type="button" (click)="button2Clicked()">Throw me some other exception, plz.</button>
    
    `
})

export class ThrowErrorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    buttonClicked()
    {
    console.log('yes, the button was clicked');
    throw new Error('Some Exception');
  }
  
  button2Clicked() 
  {
    console.log('yes, the other button was clicked');
    throw new Error('Some other Exception');
  }
}