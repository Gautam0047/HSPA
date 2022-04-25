import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http"
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';           // importing alertifyjs   // we installed it from npm command from alertyfy js web site
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';     // importing from ngx bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';   // importing from ngx bootstrap
import { TabsModule } from 'ngx-bootstrap/tabs';              // importing from ngx bootstrap for tab control
import { ButtonsModule } from 'ngx-bootstrap/buttons';       // from ngx bootstrap for using buttons
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';    // from ngx bootstrap for using date picker

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    NavBarComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,             // this must be imported for working with http
    FormsModule,                  // imported to work with template driven form
    ReactiveFormsModule,          // imported to work with reactive form
    BrowserAnimationsModule,       // from ngx bootstrap
    BsDropdownModule.forRoot(),    // from ngx bootstrap web site api
    TabsModule.forRoot(),          // from ngx bootstrap web site api
    ButtonsModule.forRoot(),        // from ngx bootstrap web site api
    BsDatepickerModule.forRoot(),   // from ngx bootstrap api
    AppRoutingModule
  ],
  providers: [HousingService, UserService, AlertifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
