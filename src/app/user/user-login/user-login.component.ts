import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authservice: AuthService,
    private alertyfy: AlertifyService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationform();
  }

  createRegistrationform(){
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required,],
    });
  }

  onLogin(loginForm: FormGroup){
    console.log(loginForm.value);
    const token = this.authservice.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertyfy.success("login success");
      this.router.navigate(["/"]);
    }
    else{
      this.alertyfy.error("login failed");
    }
  }

}
