import { Component, OnInit,Input} from '@angular/core';
import {AbstractControlDirective,AbstractControl} from '@angular/forms';

@Component({
    selector: 'errors',
    template: `
    <ul *ngIf="showErrors()">
    <li style="color: red" *ngFor="let error of errors()">{{error}}</li>
  </ul>

    
    `
})

export class ErrorsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }



    private static readonly errorMessages = {
        'required': () => 'This field is required',
        'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
        'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
        'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
        'age': (params) => params.message,
        'email': (params) => params.message
      };
    
      @Input()       private control: AbstractControlDirective | AbstractControl;
    
      showErrors(): boolean {
        return this.control &&
          this.control.errors &&
          (this.control.dirty || this.control.touched);
      }
    
      errors(): string[] {
        return Object.keys(this.control.errors)
          .map(field => this.getMessage(field, this.control.errors[field]));
      }
    
      private getMessage(type: string, params: any) {
        return ErrorsComponent.errorMessages[type](params);
      }
    
    
}