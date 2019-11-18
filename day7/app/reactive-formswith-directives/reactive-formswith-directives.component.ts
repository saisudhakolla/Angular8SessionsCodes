import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-formswith-directives',
  templateUrl: './reactive-formswith-directives.component.html',
  styleUrls: ['./reactive-formswith-directives.component.css']
})
export class ReactiveFormswithDirectivesComponent   {
  validateForm: FormGroup;
  
  constructor(private form: FormBuilder) {
    this.validateForm = new FormGroup({
      'name': new FormControl(),
      'email': new FormControl(),
      'age': new FormControl(),
      'address': new FormGroup({
        'country': new FormControl(),
        'city': new FormControl()
      })
    });
  }

  register(validateForm: NgForm) {
    console.log('Registration successful.');
    console.log(validateForm.value);
    alert("Hi "+validateForm.value.name+" you information are valid.")
  }

 

}
