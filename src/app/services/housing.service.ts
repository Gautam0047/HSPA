import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { IpropertyBase } from '../model/IpropertyBase';
import { IProperty } from '../property/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

 //this methos is for returning the array of property
  getAllProperties(SellRent:number): Observable<IpropertyBase[]> {
    return this.http.get("data/properties.json").pipe(
      map(data => {
        const properiesArray: Array<IpropertyBase> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            properiesArray.push(data[id]);
          }
        }
        return properiesArray;
      })
    );
  }

}
