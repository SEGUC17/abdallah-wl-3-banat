import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GbdetailsService {

	authToken:any;

  constructor(private http: Http) { }

  clientGetBusiness(id){
  		return this.http.get('http://localhost:8080/clients/ViewBusinesses/'+id).map(res=>res.json());
  }

  guestGetBusiness(id){
      return this.http.get('http://localhost:8080/ViewBusinesses/'+id).map(res=>res.json());
  }

    onRating(rating,id){

let headers = new Headers();
 this.loadToken();

const rate ={
  rating:rating
}
//console.log(this.authToken);
  headers.append('Content-Type','application/json');
       headers.append('Authorization', this.authToken);
console.log(id);
   return this.http.post('http://localhost:8080/clients/rate/'+id,rate,{headers: headers})
      .map(res => res.json());
 }
 loadToken(){
  const token =localStorage.getItem('id_token');
  this.authToken = token;
}

}
