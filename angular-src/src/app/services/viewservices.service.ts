import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewservicesService {


  constructor(private http: Http) { }
  viewServices(){
  		let headers = new Headers();
  		headers.append('Content-Type','application/json');
  		return this.http.get('http://localhost:8080/bproviders/viewServices/:bid',{headers:headers}).map(res=>res.json());
  }

}
