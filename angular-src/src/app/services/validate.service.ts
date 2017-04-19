import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
validateClient(Clients){
   if(Clients.Firstname == undefined || Clients.email == undefined || Clients.Lastname == undefined || 
   Clients.password == undefined || Clients.passwordValidation== undefined||Clients.newPassword==undefined
   ||Clients.creditCArdInfo== undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

