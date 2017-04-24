import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminsService {

	AuthToken:any;

  constructor(private http:Http) { }

   loadToken(){
  	this.AuthToken = localStorage.getItem('id_token');
  }

  banorUnban(id,bool){
  		let headers = new Headers();
  		this.loadToken();
  		headers.append('Content-Type','application/json');
  		headers.append('Authorization',this.AuthToken);
  		return this.http.get('http://localhost:8080/admins/ban/'+id+'/'+bool,{headers:headers}).map(res=>res.json());
  }

  viewClients(){
  		let headers = new Headers();
  		this.loadToken();
  		headers.append('Content-Type','application/json');
  		headers.append('Authorization',this.AuthToken);
  		return this.http.get('http://localhost:8080/admins/viewclients',{headers:headers}).map(res=>res.json());
  }

  getapplications(){
  let headers= new Headers();
  this.loadToken();
  headers.append('Content-Type','application/json');
  headers.append('Authorization',this.AuthToken);

  return this.http.get('http://localhost:8080/admins/getapps',{headers:headers}).map(res=>res.json());

}

acceptOrDecline(businessName,approval){
  let headers= new Headers();
  this.loadToken();
  headers.append('Authorization',this.AuthToken);
  headers.append('Content-Type','application/json');
  return this.http.get('http://localhost:8080/admins/approve/'+businessName+'/'+approval,{headers:headers}).map(res=>res.json());
}

removeProvider(id){
      let headers= new Headers();
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.AuthToken);
    return this.http.get('http://localhost:8080/admins/removebprovider/'+id,{headers:headers})
    .map(res => res.json());
 
  }
  viewProviders(){
      let headers= new Headers();
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.AuthToken);
 return this.http.get('http://localhost:8080/admins/showbp',{headers:headers})
    .map(res => res.json());


  }

}
