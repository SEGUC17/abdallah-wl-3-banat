import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationService {
  authToken:any;

  constructor(private http:Http) { }

  eventValidation(event){
    let headers = new Headers();
    this.loadToken();
    var bId = localStorage.getItem('businessID');
    var serviceId = localStorage.getItem('serviceId');
    headers.append('Content-type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost:8080/clients/eventValidation/'+bId+'/'+serviceId,event,{headers:headers})
    .map(res => res.json());
  }

  addEvent(event){
    let headers = new Headers();
    this.loadToken();
    var bId = localStorage.getItem('businessID');
    var serviceId = localStorage.getItem('serviceId');
    headers.append('Content-type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost:8080/clients/addEvent/'+bId+'/'+serviceId,event,{headers:headers})
    .map(res => res.json());
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }
  getEvents(){
    let headers = new Headers();
    this.loadToken();
    var bId = localStorage.getItem('businessID');
    var serviceId = localStorage.getItem('serviceId');
    headers.append('Content-type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost:8080/clients/getEvents/'+bId+'/'+serviceId,{headers:headers})
    .map(res => res.json());
  }

}
