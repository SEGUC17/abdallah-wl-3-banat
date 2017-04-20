import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientsChangePasswordService {
authToken:any;
  constructor(private http:Http) { }

editPassword(currentPassword,newPassword,newPasswordValidation){

let headers = new Headers();
this.loadToken();


const user = {
 

  newPassword:newPassword,
  currentPassword:currentPassword,
  newPasswordValidation:newPasswordValidation
}
headers.append('Content-Type','application/json');
headers.append('Authorization',this.authToken);

return this.http.post('http://localhost:8080/clients/editPassword',user,{headers:headers})
.map(res=>res.json());



}
loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;

}

}


