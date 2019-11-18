import { Component, OnInit,ViewChild } from '@angular/core';
import {User} from "../user";
import {NgForm} from "@angular/forms";
import { HttpClient } from '@angular/common/http';  
@Component({
  selector: 'app-template-forms-simple',
  templateUrl: './template-forms-simple.component.html',
  styleUrls: ['./template-forms-simple.component.css']
})
export class TemplateFormsSimpleComponent implements OnInit {
  @ViewChild('signupForm',null) signupForm: NgForm;
  constructor(private http:HttpClient) 
  { }
  user: User;
  ngOnInit() {
    this.user = new User();
  }

  save(ngf:NgForm) 
  {
    console.log(this.signupForm);

    console.log(this.signupForm.form.controls["firstName"].value);
       
    console.log(this.user.firstName);

    if (this.signupForm.valid) {
      console.log('Saved: ' + JSON.stringify(this.signupForm.value));
    }

    this.http.post('/api/userCreate', this.signupForm.value)
      .subscribe((response)=>{
        console.log('repsonse ',response);
      })


  } 

}
