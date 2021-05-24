import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required,]],
      password:['', [Validators.required,]],
  });
  }

  ngOnInit(): void {
  }

}
