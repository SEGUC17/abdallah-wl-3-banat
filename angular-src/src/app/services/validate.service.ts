import { Injectable } from '@angular/core';
import {Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ValidateService {
authToken:any;
  constructor(private http:Http) { }

validateService(user){
if (user.name== undefined || user.price== undefined ||user.description== undefined || (isNaN(user.price)) )
return false ;
else 
return true;

}


AddService(user){
   let headers=new Headers();
   this.loadToken();
   headers.append('Content-type','application/json');
   headers.append('Authorization',this.authToken);
   return this.http.post('http://localhost:8080/bproviders/AddService',user,{headers:headers}).map(res => res.json());
 }

 loadToken(){
   this.authToken = localStorage.getItem('id_token');
 }

}
