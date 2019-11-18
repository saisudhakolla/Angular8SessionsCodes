import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'styles-cmp',
    template: `
    <ul *ngFor="let person of people">
  <li [ngStyle]="{'font-size.px':24}"
      [style.color]="getColor(person.country)">
    {{ person.name }} ({{ person.country }})
  </li>
</ul>
    
    `
})

export class AttributeComponent implements OnInit {
    constructor() { }

    people: any[] = [
        {
          name: "Douglas  Pace",
          country: "UK"
        },
        {
          name: "Mcleod  Mueller",
          country: "USA"
        },
        {
          name: "Day  Meyers",
          country: "HK"
        },
        {
          name: "Aguirre  Ellis",
          country: "UK"
        },
        {
          name: "Cook  Tyson",
          country: "USA"
        }
      ];
    
      getColor(country) {
        switch (country) {
          case "UK":
            return "green";
          case "USA":
            return "blue";
          case "HK":
            return "red";
        }
      }
    


    ngOnInit() { }
}