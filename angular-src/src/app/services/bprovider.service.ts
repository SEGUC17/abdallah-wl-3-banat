import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BproviderService {
  authToken: any;

  constructor(private http:Http ) { }

  createBusinessIfDeclined(business){
    let headers= new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
console.log(business);
    return this.http.post('http://localhost:8080/bproviders/createBusiness',business,{headers:headers}).map(res=>res.json());

  }



FindBPandB(){

  let headers= new Headers();
  this.loadToken();
  headers.append('Content-Type','application/json');
  headers.append('Authorization',this.authToken);

  return this.http.get('http://localhost:8080/bproviders/BPandB',{headers:headers}).map(res=>res.json());


}


  loadToken(){
    const token= localStorage.getItem('id_token');
    this.authToken=token;
  }

}
