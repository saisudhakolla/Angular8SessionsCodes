import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.css']
})
export class HttpCallsComponent implements OnInit {

  results :any;
  constructor(private http: HttpClient){
  }

  ngOnInit() 
  {
    
    //this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    //this.http.get('https://reqres.in/api/users?page=2')
    //this.http.get('https://api.github.com/users/shabari')
    //this.http.get('http://rest-service.guides.spring.io/greeting')
  //  this.http.get('https://jsonplaceholder.typicode.com/todos/1')



  //this.http.get('http://rest-service.guides.spring.io/greeting')
  //this.http.get('http://dummy.restapiexample.com/api/v1/employees')

  this.http.get('https://api.github.com/users/abhishekanandam')
        .subscribe((response)=>{
          console.log(response);

        }),(errMSG)=>{console.log(errMSG);},
        ()=>{console.log("done")};

  }

}
