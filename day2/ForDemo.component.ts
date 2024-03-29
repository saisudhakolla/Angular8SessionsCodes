
import {Component} from '@angular/core';

@Component({
    selector: 'ngfor-example',
    template: `
  
   <ul *ngFor="let person of people">
  <li *ngIf="person.age < 30">
    {{ person.name }} ({{ person.age }})
  </li>
</ul>
   `
  })
  export class NgForExampleComponent {
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