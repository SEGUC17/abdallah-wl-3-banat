import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 

export class ViewService{
	
private searchUrl:string;

constructor(private http:Http){}

searchBusiness(businessName){

const search = {
 businessName:businessName
}
return this.http.post('http://localhost:8080/bproviders/searchBusiness',search)
.map(res=>res.json());
}

searchBusinessUpdated(search:string){
	
	return this.http.get('http://localhost:8080/bproviders/searchB?q='+search).map(res => res.json());
}

getAllBusiness(){

	return this.http.get('http://localhost:8080/all').map(res => res.json());
}
	
getTopBusiness(){

	return this.http.get('http://localhost:8080/top').map(res => res.json());
}


}	