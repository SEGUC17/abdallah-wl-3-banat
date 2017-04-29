import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientsService {
authToken:any;

  constructor(private http:Http) { }

editP(Firstname,Lastname,creditCArdInfo,address,email,phone,birthdate){

let headers = new Headers();
this.loadToken();


const user = {

  firstname:Firstname,
  lastname:Lastname,
  email:email,
  address:address,
  creditcardinfo:creditCArdInfo,
  phone:phone,
  birthdate:birthdate

}

headers.append('Content-Type','application/json');
headers.append('Authorization',this.authToken);

return this.http.post('http://localhost:8080/clients/EditProfile',user,{headers:headers})
.map(res=>res.json());



}
getCU(){
let headers = new Headers();
 this.loadToken();
     console.log(this.authToken);
     headers.append('Content-Type','application/json');
       headers.append('Authorization', this.authToken);

   const u= this.http.get('http://localhost:8080/clients/Profile',{headers: headers})
      .map(res => res.json());
console.log(u);
return u;
}
loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;

}

}
