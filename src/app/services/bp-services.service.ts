import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BpServicesService {

 authToken:any;
  constructor(private http:Http) { }

searchBusiness(businessName){

let headers = new Headers();
this.loadToken();
console.log(this.authToken);


const search = {
 businessName:businessName
}
headers.append('Content-Type','application/json');
headers.append('Authorization',this.authToken);

return this.http.post('http://localhost:8080/bproviders/searchBusiness',search,{headers:headers})
.map(res=>res.json());



}
getAllBusiness(){

	return this.http.get('http://localhost:8080/All').map(res => res.json());
}
loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;


}

}


