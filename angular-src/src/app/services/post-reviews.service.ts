import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostReviewsService {
authToken:any
  constructor(private http:Http) { }




  PostReviews(id,review) {
    let headers= new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
 headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/clients/PostReview/'+id,review, {headers:headers}).map(res=>res.json());
  }


loadToken () {
 const token = localStorage.getItem('id_token');
 this.authToken = token;

}


}
