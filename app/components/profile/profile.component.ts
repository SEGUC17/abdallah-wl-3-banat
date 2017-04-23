import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';
import {ClientsChangePasswordService} from '../../services/clients-change-password.service';
import {ValidateService} from '../../services/validate.service';
import{FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:Object;
username:string;
currentPassword:string;
newPassword:string;
newPasswordValidation:string;

Firstname: String;
Lastname: String;
creditCArdInfo:String;
address: string;
email: String;
profile1:Object;

  constructor(private authService:AuthService,private changepw:ClientsChangePasswordService ,
  private ClientsService :ClientsService , private router:Router,private validateService:ValidateService,private flashMessages:FlashMessagesService) { }


  ngOnInit() {
  this.ClientsService.getProfile().subscribe(profile =>{console.log(profile);
  this.profile1 = profile;
  }/*,
   err =>{
  console.log(err);
  return false;
  }*/
  )
  }

  onShowProfile(){
 this.ngOnInit();
  }

  onClientseditProfileSubmit(){
    const client = {Firstname:this.Firstname,
      Lastname:this.Lastname,
    creditCArdInfo:this.creditCArdInfo,
    address:this.address};
    if(!(this.validateService.validateClient(client))){
      this.flashMessages.show('ERROR',{cssClass:'alert-danger',timeout:3000});
    }
    else{
   this.ClientsService.editP(this.Firstname,this.Lastname,this.creditCArdInfo,
   this.address,this.email).subscribe(data => {
     console.log(data);
   })
  
  this.flashMessages.show('SUCCESS',{cssClass:'alert-success',timeout:3000});
    }

}



  onClientsChangePasswordSubmit(){
   this.changepw.editPassword(this.username,this.currentPassword,this.newPassword,this.newPasswordValidation).subscribe(data => {
     console.log(data);
   })
  }



}