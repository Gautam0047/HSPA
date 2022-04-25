import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // In below we are feching the route parameter called 'id'
    this.route.params.subscribe(param =>{
      this.propertyId = +param["id"];                // + means we are type casting it to number
    })
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail',this.propertyId]);
  }

}
