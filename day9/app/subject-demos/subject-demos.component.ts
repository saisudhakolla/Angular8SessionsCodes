import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-subject-demos',
  templateUrl: './subject-demos.component.html',
  styleUrls: ['./subject-demos.component.css']
})
export class SubjectDemosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const subject = new Subject(); // observable

    subject.subscribe({
      next: (data) => console.log('First observer prints '+ data)
     });
 
       subject.next(1); // next value / next output 
 
       subject.subscribe({
      next: (data) => console.log('Second observer prints '+ data)
     });
     subject.next(2);
     subject.next(3);
  }

}
