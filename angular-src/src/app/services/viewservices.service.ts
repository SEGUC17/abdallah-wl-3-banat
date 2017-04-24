import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewservicesService {

	AuthToken:any;

  constructor(private http: Http) { }

  loadToken(){
  	this.AuthToken = localStorage.getItem('id_token');
  }

  getBusiness(){
  		let headers = new Headers();
  		this.loadToken();
  		headers.append('Content-Type','application/json');
  		headers.append('Authorization',this.AuthToken);
  		return this.http.get('http://localhost:8080/bproviders/getbusiness',{headers:headers}).map(res=>res.json());
  }

  

  viewServices(bid){
  		let headers = new Headers();
  		this.loadToken();
  		headers.append('Content-Type','application/json');
  		headers.append('Authorization',this.AuthToken);
  		return this.http.get('http://localhost:8080/bproviders/viewServices/'+bid,{headers:headers}).map(res=>res.json());
  }

}
