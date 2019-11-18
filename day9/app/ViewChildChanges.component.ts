import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'view-child-cmp',
    template: `
    <h3> have a look @ your console </h3>
    
    
 <div *ngIf="true">
 <div #dynamicDiv>dynamic</div>
</div>


    `
})

export class VCComponent implements OnInit,AfterViewInit {
    
    @ViewChild('dynamicDiv',null) dynamicDiv: ElementRef<HTMLDivElement>;

    constructor() { }

    ngOnInit() { 
        
        console.log('init dynamic', this.dynamicDiv);
    }
    ngAfterViewInit() {
        
        console.log('after view init dynamic', this.dynamicDiv); // div

      }
}