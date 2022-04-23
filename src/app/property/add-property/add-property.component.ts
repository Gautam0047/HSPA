import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IProperty } from '../IProperty';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('addPropertyForm') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  Name: string;
  Type: string;
  Price: string;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addPropertyForm.value)
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
