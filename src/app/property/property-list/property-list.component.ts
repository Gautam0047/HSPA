import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IpropertyBase } from 'src/app/model/IpropertyBase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<IpropertyBase>;
  SellRent = 1;

  constructor(private housingService : HousingService, private route: ActivatedRoute) {}

  ngOnInit() {

    // in if condition we are taking snapshot of url after domain name
  if(this.route.snapshot.url.toString()){
    this.SellRent = 2;                            //Means we are on rent-property URL else we are on base Url
  }

  this.housingService.getAllProperties(this.SellRent)      // we are passing this parameter to filter the property is for rent or sell
    .subscribe(data =>
    {
      this.properties = data;
      console.log(this.route.snapshot.url.toString());         // just check what is the url
    },
    (error) => {
      console.log(error);
    });
  }

}
