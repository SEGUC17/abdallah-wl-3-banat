import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientsService {
authToken:any;

  constructor(private http:Http) { }

editP(Firstname,Lastname,creditCArdInfo,address,email){

let headers = new Headers();
this.loadToken();


const user = {

  firstname:Firstname,
  lastname:Lastname,
  email:email,
  address:address,
  creditcardinfo:creditCArdInfo,

}

headers.append('Content-Type','application/json');
headers.append('Authorization',this.authToken);

return this.http.post('http://localhost:8080/clients/editProfile',user,{headers:headers})
.map(res=>res.json());



}
loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;

}

}
