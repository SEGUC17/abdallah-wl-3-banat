import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceeditService {

	service:any;
	AuthToken:any;

  constructor(private http: Http) { }

   loadToken(){
  	this.AuthToken = localStorage.getItem('id_token');
  }

  	EditService(bid,serviceid,service){
  		let headers = new Headers();
  		this.loadToken();
  		headers.append('Content-Type','application/json');
  		headers.append('Authorization',this.AuthToken);
  		return this.http.post('http://localhost:8080/bproviders/editservices/'+bid+'/'+serviceid,service,{headers:headers}).map(res=>res.json());
  	}

  	
}
