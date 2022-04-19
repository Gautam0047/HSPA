import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [{
    "id" : 1,
    "Name" : "Birla house",
    "Type" : "House",
    "Price" : 12000,

  },
  {
    "id" : 2,
    "Name" : "avd house",
    "Type" : "villa",
    "Price" : 12000,

  },
  {
    "id" : 3,
    "Name" : "eryer house",
    "Type" : "House",
    "Price" : 12000,

  },
  {
    "id" : 1,
    "Name" : "qwe house",
    "Type" : "vilaa",
    "Price" : 12000,

  },
  {
    "id" : 1,
    "Name" : "uyiuy house",
    "Type" : "House",
    "Price" : 12000,

  },
  {
    "id" : 1,
    "Name" : "bmh house",
    "Type" : "villa",
    "Price" : 12000,

  },];

  constructor() { }

  ngOnInit() {
  }

}
