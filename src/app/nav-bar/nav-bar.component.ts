import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string | null;
  constructor(private alertyfy: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedInUser = localStorage.getItem('token');              // getting item whose key is 'token' from browser local storage
    return this.loggedInUser                                        // return token if it is exists else return null
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertyfy.success("you are logged out");
  }

}
