import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IpropertyBase } from 'src/app/model/IpropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  //@ViewChild('addPropertyForm') addPropertyForm: FormGroup;     //addPropertyForm is a template reference variable of form
  @ViewChild('formTabs') formTabs?: TabsetComponent;         // formTabs is a template reference variable of Tabset

  addPropertyForm: FormGroup;

  // Name: string;
  // Type: string;
  // Price: string;
  // Will come from master
  propertyType: Array<string> = ['House', 'Apartment', 'Duplex'];
  FurnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IpropertyBase={
    Id: 0,
    Name: '',
    PType: '',
    Price: 0,
    SellRent: 0,
    BHK: 0,
    FType: '',
    City: '',
    RTM: 0,
    BuildingArea: 0,
    Image: ''
  };

  constructor(private route:Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.CrfeateAddPropertyForm();
  }

  CrfeateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null , Validators.required],
        BHK: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
        PType: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
        FType: [null, Validators.required],
        Name: [null, [Validators.required,Validators.minLength(5), Validators.maxLength(25)]],
        City: [null, [Validators.required,Validators.minLength(5), Validators.maxLength(25)]]
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [0],
        Maintenance: [0],
    }),

    AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
    }),

    OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null, Validators.required],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
    })
    })
  }


  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.get('BasicInfo') as FormGroup;
  }

  get PriceInfo() {
      return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
      return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
      return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
  }
// #endregion

// #region <FormControl>

  get SellRent() {
    return this.BasicInfo.get('SellRent') as FormControl
  }

  get BHK() {
    return this.BasicInfo.controls['BHK'] as FormControl
  }

  get PType() {
    return this.BasicInfo.controls['PType'] as FormControl;
}

get FType() {
    return this.BasicInfo.controls['FType'] as FormControl;
}

get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
}

get City() {
    return this.BasicInfo.get('City') as FormControl;
}

get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
}

get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
}

get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
}

get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
}

get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
}

get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
}

get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
}

get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
}

get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
}

get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
}

get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
}

get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
}

get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
}

get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
}

get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
}

// #endregion

  onSubmit(){
    console.log('Congrats, form submitted');
    console.log(this.addPropertyForm);
    console.log(this.addPropertyForm.controls['BasicInfo'].get('SellRent')?.valid);
  }

  // below function is copied from ngx bootstrap
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  onCancle(){
    this.route.navigate(['/']);
  }

}
