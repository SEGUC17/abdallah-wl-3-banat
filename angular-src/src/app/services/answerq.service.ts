import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnswerqService {
answer: any;
authToken:any;
  constructor(private http:Http) { }

  answerQuestion(answer ,id){
    let headers= new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    console.log(answer);
    return this.http.post('http://localhost:8080/bproviders/answerQuestion/'+id,answer,{headers:headers})
    .map(res => res.json());
  
}

   loadToken(){
    this.authToken=localStorage.getItem('id_token');
  }



}
