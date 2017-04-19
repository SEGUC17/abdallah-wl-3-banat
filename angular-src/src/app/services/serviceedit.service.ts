import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceeditService {

	service:any;

  constructor(private http: Http) { }
  	editService(service){
  		let headers = new Headers();
  		headers.append('Content-Type','application/json');
  		return this.http.post('http://localhost:8080/bproviders/editservices/:bid/:serviceid',service,{headers:headers}).map(res=>res.json());
  	}
}
