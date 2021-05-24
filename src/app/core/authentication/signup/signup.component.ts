import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  formGroup1: FormGroup;
  step ='step1';
  showUser: string = 'abc' ;
  @ViewChild('step1') private step1: ElementRef;

  constructor( private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required,]],
      lastName:['', [Validators.required,]],
      userName:['', [Validators.required,]],
      emailAddress:['', [Validators.required,]],
      cellNumber:['', [Validators.required,]],
      userType:['', [Validators.required,]],
      password:['', [Validators.required,]],
      confirmPassword:['', [Validators.required,]],
  
  });
  this.formGroup1 = this.formBuilder.group({
    shopName: ['', [Validators.required,]],
    shopAddress:['', [Validators.required,]],
    availability:['', [Validators.required,]],
   

});
  }

  ngOnInit(): void {
  }

  show(argument){

    setTimeout(()=>{
      this.step1.nativeElement.style.opacity= 1
    },0)

    console.log('argument', argument)
    if(argument==='user'){
      this.showUser = 'user'
    }
    else{
      this.showUser = 'mechanic'

    }
  }

  changeToStep(){
    this.step= 'step2'
  }
}
