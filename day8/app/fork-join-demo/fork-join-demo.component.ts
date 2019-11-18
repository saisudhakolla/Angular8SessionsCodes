import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
@Component({
  selector: 'app-fork-join-demo',
  templateUrl: './fork-join-demo.component.html',
  styleUrls: ['./fork-join-demo.component.css']
})
export class ForkJoinDemoComponent implements OnInit {

  response1: {};
  response2: {};
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let request1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    let request2 = this.http.get('https://api.github.com/users/shabari');
   //let request2= this.http.get('https://rest-service.guides.spring.io/greeting');

    forkJoin([request1, request2]).subscribe(results => {
      // results[0] is our first response
      // results[1] is our second response
       
      this.response1 = results[0];
      this.response2 = results[1];
    });
  }


}
