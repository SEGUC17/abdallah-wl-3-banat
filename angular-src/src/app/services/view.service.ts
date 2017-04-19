import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 

export class ViewService{

constructor(private http:Http){

}

getAllBusiness(){

	return this.http.get('http://localhost:8080/all').map(res => res.json());
}
	
getTopBusiness(){

	return this.http.get('http://localhost:8080/top').map(res => res.json());
}


}	