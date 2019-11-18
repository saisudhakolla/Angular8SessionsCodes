import { Component, OnInit,OnDestroy } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Subscription} from 'rxjs';





@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJSONComponent implements OnInit {

  constructor(private http:HttpClient) { }
  result:any;
  subscription: Subscription;

  ngOnInit() 
  {
   this.subscription=this.http.get("assets/friends.json")
    //.subscribe(result => this.result =result);
    .subscribe((data) => 
                {
                this.result=data
                }
      );

  }

 ngOnDestroy()
 {
   this.subscription.unsubscribe(); // avoid Ml
 }

}
