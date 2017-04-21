import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
user:any;
authToken:any;
  constructor(private http:Http) { }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:8080/login',user,{headers:headers})
    .map(res => res.json());
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  loggedIn(){
    return tokenNotExpired('id_token');
  }


}
