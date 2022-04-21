import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { IProperty } from '../property/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

  getAllProperties(SellRent:number): Observable<IProperty[]> {
    return this.http.get("data/properties.json").pipe(
      map(data => {
        const properiesArray: Array<IProperty> = [];
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
