import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder) { }

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

  passWordMatchingValidator(fc: AbstractControl): ValidationErrors | null{
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
    {
      notmatched: true
    }
  }

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
    console.log(this.registrationForm.valid);
    this.user = Object.assign(this.user, this.registrationForm);   // using this method we can assign one object values to the other object
    localStorage.setItem('Users', JSON.stringify(this.user));
  }

}
