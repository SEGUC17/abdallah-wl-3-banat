import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetReviewsService {

  constructor(private http:Http) { }

  GetReviews(id) {
  this.http.get('/ViewReviews/'+id).map(res=>res.json());
  }

}
