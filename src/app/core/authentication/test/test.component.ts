import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators , FormArray} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required,]],
      lastName: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
      contact: ['', [Validators.required,]],
      education: this.formBuilder.array([]),
  });
  }

  ngOnInit(): void {
  }

  get education(): FormArray {
    return this.formGroup.get('education') as FormArray;
  }


  addEducation(): FormGroup {

    return this.formBuilder.group({
      institute: ['', [Validators.required,]],
      degree:['', [Validators.required,]],
      passingPercentage:['', [Validators.required,]],
      passingYear:['', [Validators.required,]],
    });
  }

  add123(){
    this.education.push(this.addEducation())
    console.log(this.education)
  }

  final(formGroup){
    let a:any= {}
    a.bioData= {
      firstName:formGroup.value.firstName,
      lastName:formGroup.value.lastName,
      email:formGroup.value.email,
      contact:formGroup.value.contact
    }
    a.education = formGroup.value.education
    console.log('FINAL FORM GROUP' , a  )
    formGroup.reset()
  }
}
