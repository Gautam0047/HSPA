import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

constructor() { }

authUser(user: any){
  let UserArray = [];
  if(localStorage.getItem('Users')){
    UserArray =  JSON.parse(localStorage.getItem('Users') as string);
  }
  return Array.isArray(UserArray) ? UserArray.find(((x: { userName: any; password: any; }) => x.userName === user.userName && x.password === user.password)) : false;
}
}
