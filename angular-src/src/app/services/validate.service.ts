import { Injectable } from '@angular/core';
import {Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ValidateService {

	authToken:any;

  constructor(private http:Http) { }
  validateAnswer(answer){
    
    if(answer==undefined){
      return false;
    }else{
      return true;
    }
  }
  validateService(user){
if (user.name== undefined || user.price== undefined ||user.description== undefined || (isNaN(user.price)) || (isNaN(user.maxSlotClients)) ||(isNaN(user.slotDuration)) )
return false ;
else    
return true;

}


AddService(user){
   let headers=new Headers();
   this.loadToken();
   headers.append('Content-type','application/json');
   headers.append('Authorization',this.authToken);
   return this.http.post('http://localhost:8080/bproviders/AddService',user,{headers:headers}).map(res => res.json());
 }

 loadToken(){
   this.authToken = localStorage.getItem('id_token');
 }
 validateClient(Clients){
   if(Clients.Firstname != undefined || Clients.email != undefined || Clients.Lastname != undefined || 
   Clients.password != undefined || Clients.passwordValidation!= undefined||Clients.newPassword!=undefined
   ||Clients.creditCArdInfo!= undefined || Clients.birthdate != undefined || !isNaN(Clients.phone)){
      return true;
    } else {
      return false;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
