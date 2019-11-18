
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'pipes-Demo',
    templateUrl: './CustomPipe.component.html',
  styleUrls: ['./CustomPipe.styles.css']
})

export class CustomPipesDemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @ViewChild('input',null) inputElement: ElementRef
  newDigit: number

  originalList: number[] = [
    2, 3, 4, 1
  ]

  pureSortableDigits: number[] = [
    2, 3, 4, 1
  ]

  impureSortableDigits: number[] = [
    2, 3, 4, 1
  ]

  addNewDigit() {
    if (this.newDigit == null)
      return

    this.originalList.push(this.newDigit)
    this.pureSortableDigits.push(this.newDigit)
    this.impureSortableDigits.push(this.newDigit)

    this.newDigit = null
    this.input.focus()
  }

  get input(): HTMLInputElement {
    return this.inputElement.nativeElement;
  }
}