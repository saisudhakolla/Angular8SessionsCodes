import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'class-cmp',
    template: `
    <ul *ngFor="let person of people">
  <li [ngClass]="{
  'text-success':person.country === 'UK',
  'text-primary':person.country === 'USA',
  'text-danger':person.country === 'HK'
  }">
  {{ person.name }} ({{ person.country }})
  </li>
</ul>
    `
})

export class Attribute2Component implements OnInit {
    constructor() { }

    ngOnInit() { }

    people: any[] = [
        {
          name: "Douglas  Pace",
          age: 35,
          country: "UK"
        },
        {
          name: "Mcleod  Mueller",
          age: 32,
          country: "USA"
        },
        {
          name: "Day  Meyers",
          age: 21,
          country: "HK"
        },
        {
          name: "Aguirre  Ellis",
          age: 34,
          country: "UK"
        },
        {
          name: "Cook  Tyson",
          age: 32,
          country: "USA"
        }
      ];
}