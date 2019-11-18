import { 
    Component,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    Input,
    SimpleChanges
  } from '@angular/core';

  @Component({
    selector: 'parent-component',
    template: `
      <h2>Life Cycle Hooks</h2>
      <button (click)="toggle()">Hide/Show Child</button>
      <child-component 
        *ngIf="displayChild"
        [message]="'Hello'">
      </child-component>
    `
  })
  export class ParentComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  
      displayChild: boolean = false;
  
      constructor() {
        console.log("ParentComponent: Constructor");
      }
  
      toggle() {
        this.displayChild = !this.displayChild;
      }
  
      ngOnChanges() {
        console.log("ParentComponent: OnChanges");
      }
  
      ngOnInit() {
        console.log("ParentComponent: OnInit");
      }
  
      ngDoCheck() {
        console.log("ParentComponent: DoCheck");
      }
  
      ngAfterContentInit() {
        console.log("ParentComponent: AfterContentInit");
      }
  
      ngAfterContentChecked() {
      console.log("ParentComponent:AfterContentChecked");
      }
   
      ngAfterViewInit() {
      console.log("ParentComponent:AfterViewInit");
      }
   
      ngAfterViewChecked() {
        console.log("ParentComponent:AfterViewChecked");
      }
   
      ngOnDestroy() {
        console.log("ParentComponent:OnDestroy");
      }
  }