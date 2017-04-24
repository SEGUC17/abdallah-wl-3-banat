import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ViewquestionsService {

    authToken: any;

  constructor(private http: Http) { }

  loadToken(){
     this.authToken = localStorage.getItem('id_token');
  }

  viewQuestions(bid){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost:8080/bproviders/myQuestions' + '?businessid=' + bid, {headers:headers}).map(res=>res.json());
  }

}
