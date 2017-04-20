import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {ClientsService} from '../../services/clients.service';
import{Router} from '@angular/router'
import{ClientsChangePasswordService }from '../../services/clients-change-password.service'
@Component({
  selector: 'app-clients-change-password',
  templateUrl: './clients-change-password.component.html',
  styleUrls: ['./clients-change-password.component.css']
})

export class ClientsChangePasswordComponent implements OnInit {

currentPassword:string;
newPassword:string;
newPasswordValidation:string

  constructor(private validateService: ValidateService ,
  private flashMessage:FlashMessagesService,
  private AuthService: AuthService,
  private router:Router,
  private ClientsChangePasswordService:ClientsChangePasswordService
  ) { }

  ngOnInit() {
  }

  onClientsChangePasswordSubmit(){
   this.ClientsChangePasswordService.editPassword(this.currentPassword,this.newPassword,this.newPasswordValidation).subscribe(data => {
     console.log(data);
   })
  }

}
