import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {ClientsService} from '../../services/clients.service';
import{Router} from '@angular/router'


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

Firstname: String;
Lastname: String;
creditCArdInfo:String;
address: string;
 
  email: String;

 // newPassword: String;
  //passwordValidation:String

  constructor(private validateService: ValidateService ,
  private flashMessage:FlashMessagesService,
  private AuthService: AuthService,
  private router:Router,
  private clientsservice:ClientsService
  ) { }

  ngOnInit() {
  }

  onClientseditProfileSubmit(){
   this.clientsservice.editP(this.Firstname,this.Lastname,this.creditCArdInfo,
   this.address,this.email).subscribe(data => {
     console.log(data);
   })
  }

}

 


