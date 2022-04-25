import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpropertyBase } from 'src/app/model/IpropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  // input is used to pass data from parent component to child component. here this component is child componrnt
  // parent component is a component in which this component is used as a html tag. so we used this component in property list page
  // parent component's template file is responsible for assign the value to this input property(fiels or variable)

  @Input() property: IpropertyBase
  @Input() hideIcons: boolean


  constructor() { }

  ngOnInit() {

  }

}
