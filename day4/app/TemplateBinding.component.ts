import {Component} from '@angular/core';
 

@Component({
    selector: 'template-cmp',
    template: `
   
   <h3> observe the DOM generated in both cases by uncommenting </h3>
    <!-- 
    <div *ngFor="let person of people">
    <div *ngIf="person.age < 30">
      {{ person.name }} ({{ person.age }})
    </div>
  </div>  
-->

 

  <ng-container *ngFor="let person of people">
  <div *ngIf="person.age < 30">
      {{ person.name }} ({{ person.age }})
    </div>
  </ng-container>
 

  
   
   `
  })
  export class TemplateDemoComponent {
    people: any[] = [
        {
          "name": "Douglas  Pace",
          "age": 35
        },
        {
          "name": "Mcleod  Mueller",
          "age": 32
        },
        {
          "name": "Day  Meyers",
          "age": 21
        },
        {
          "name": "Aguirre  Ellis",
          "age": 34
        },
        {
          "name": "Cook  Tyson",
          "age": 32
        }
      ];
  }