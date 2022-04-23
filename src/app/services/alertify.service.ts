import { Injectable } from '@angular/core';
import *  as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message: string){
  alertify.success(message);
}

error(message: string){
  alertify.error(message);
}

warrning(message: string){
  alertify.warning(message);
}

normal(message: string){
  alertify.normal(message);
}

}
