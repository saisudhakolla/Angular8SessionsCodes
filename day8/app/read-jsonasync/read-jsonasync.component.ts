import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-read-jsonasync',
  templateUrl: './read-jsonasync.component.html',
  styleUrls: ['./read-jsonasync.component.css']
})
export class ReadJSONAsyncComponent implements OnInit {

  result:any;

  constructor(private http:HttpClient) 
  {
    this.result=this.http.get("assets/friends.json");
   // .pipe(map(result=>result))

   }  

  ngOnInit() {
  }

}
