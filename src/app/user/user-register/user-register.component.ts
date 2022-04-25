import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;                          // form data will be assign to this field
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private userservice: UserService,
    private alertyfy: AlertifyService, private router: Router) { }

  ngOnInit(): void {
    // Using Form Group

    /*
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    },this.passWordMatchingValidator)
    */

    // Using FormBuilder
    this.createRegistrationform();
  }

  createRegistrationform(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    }, {Validators: this.passWordMatchingValidator});
  }

  // this is customn validator function
  passWordMatchingValidator(fc: AbstractControl): ValidationErrors | null{
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null : { notmatched: true }

  }

  // so these are the getter(property) which returns Different FormControl of the form
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      console.log(this.registrationForm);
      //this.user = Object.assign(this.user, this.registrationForm);   // using this method we can assign one object values to the other object
      this.userData();
      this.userservice.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.router.navigate(['/']);
      this.alertyfy.success("Successfully Registered the User");
    }
    else{
      this.alertyfy.error('Kindly Provide the required fields');
    }
  }

  userData(): User{
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      mobile : this.mobile.value,
      password : this.password.value
    }
  }

  onCancle(){
    this.router.navigate(['/']);
  }
}
