import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, AbstractControl,
  ValidatorFn, FormControl
} from '@angular/forms';



import {User} from "../user";


@Component({
  selector: 'app-reactive-forms-simple',
  templateUrl: './reactive-forms-simple.component.html',
  styleUrls: ['./reactive-forms-simple.component.css']
})
export class ReactiveFormsSimpleComponent 
       implements OnInit {
  signupForm: FormGroup;
  user: User;
  ngOnInit() {
  }
  constructor() 
  {

    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

   



}

save() {
  console.log(this.signupForm);

  if (this.signupForm.valid) {
    console.log('firstName is ', this.signupForm.get('firstName').value);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));
  }
}
 
}