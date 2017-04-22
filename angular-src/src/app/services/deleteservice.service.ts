import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeleteserviceService {
	AuthToken:any;

  constructor(private http: Http) { }
       
    loadToken(){
  	this.AuthToken = localStorage.getItem('id_token');
}
 	DeleteService(serviceid){
  		let headers = new Headers();
  		this.loadToken();
  		headers.append('Content-Type','application/json');
  		headers.append('Authorization',this.AuthToken);
  		return this.http.get('http://localhost:8080/bproviders/DeleteService/'+serviceid,{headers:headers}).map(res=>res.json());
  	}

    }
