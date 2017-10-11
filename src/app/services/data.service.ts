import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
  	console.log("DataService connected...");
  }

  getMenu(){
  	return this.http.get('https://demo3972307.mockable.io/')
  	.map(res => res.json());
  }

  getPanoramica(){
  	return this.http.get('https://demo3972307.mockable.io/panoramica')
  	.map(res => res.json());

  }

}
