import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

// this method will add the user information in browser local storage
addUser(user: User){
  let users = [];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users') as string);
    users = [user, ...users];                                      // adding user into users array. this is spread operator
  }
  else{
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}
}
