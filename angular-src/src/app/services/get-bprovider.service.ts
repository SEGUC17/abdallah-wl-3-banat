import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetBproviderService {

  AuthToken: any;

  constructor(private http:Http) { }


  loadToken(){
    this.AuthToken = localStorage.getItem('id_token');
  }

  getBprovider(){

    let headers= new Headers();
    this.loadToken();
    headers.append('Content-Type','applications/json');
    headers.append('Authorization',this.AuthToken);
    return this.http.get('http://localhost:8080/bproviders/MyProfile').map(res=>res.json());
  }



}
