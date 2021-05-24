import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatFormFieldControl } from '@angular/material/form-field';

const routes: Routes = [

    { path: '', component: AuthenticationComponent},
    { path: 'signin', component: AuthenticationComponent , data :{auth:'signIn'}},
    { path: 'signup', component: AuthenticationComponent , data :{auth:'signup'}},
  
  
];

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent,
    AuthenticationComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class AuthenticationModule { }
