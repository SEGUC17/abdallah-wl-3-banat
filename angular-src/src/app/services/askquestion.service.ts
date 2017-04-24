import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AskquestionService {

  AuthToken: any;

  constructor(private http: Http) { }

  loadToken(){
    this.AuthToken = localStorage.getItem('id_token');
  }

  askQuestion(bid, question){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    var body = {
      question: question
    }
    headers.append('Authorization',this.AuthToken);
    return this.http.post('http://localhost:8080/clients/Questions' + '?businessid=' + bid, body, {headers:headers}).map(res=>res.json());
  }

}
