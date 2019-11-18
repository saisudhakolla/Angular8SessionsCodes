import { Component, OnInit } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-intro1',
  templateUrl: './rxjs-intro1.component.html',
  styleUrls: ['./rxjs-intro1.component.css']
})
export class RxjsIntro1Component implements OnInit {
  mySubscription :Subscription; // hold the response from my data source
  constructor() { }

  ngOnInit() {
     // Creating an observable - it generates number for every 2 seconds
     
     
    // const myNums = interval(2000);

    // myNums.subscribe((result: number) => 
     //{
      //  console.log(result);
    //  });
      
     const myNums = interval(2000);
    const takeFiveNumbers = myNums.pipe(take(5));
  //takeSixNumbers => observable 


//using the subscribe method - with 3 callbacks

this.mySubscription= takeFiveNumbers.subscribe((x: number) => {
  console.log(x);
},undefined,()=>{console.log("subscription completed")});



  }

}
