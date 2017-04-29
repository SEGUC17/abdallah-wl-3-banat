import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {ClientsChangePasswordService} from '../../services/clients-change-password.service';


@Component({
  selector: 'app-editp',
  templateUrl: './editp.component.html',
  styleUrls: ['./editp.component.css']
})
export class EditpComponent implements OnInit {
  Cusername:String;
Cpassword:String;
Cemail:String;
CbName:String;
Clocation:String;
Cphone:number;
Cinfo:String;
Cprofilepicture:String;
CFirstname:String;
CLastname:String;
CCreditCardInfo:String;
Cbdate:any;
user:any;

username:string;
currentPassword:string;
newPassword:string;
newPasswordValidation:string;

Firstname:String;
Lastname:String;
creditCArdInfo:String;
password:String;
email:String;
birthdate:any;
address:String;
phone:number;
info:String;
profilepicture:any;
  constructor(private editprofile:ClientsService,
   private router:Router,
   private flashMessage:FlashMessagesService,
   private changepw:ClientsChangePasswordService ,
   private validateService:ValidateService) { }

  ngOnInit() {
    this.editprofile.getCU().subscribe(data =>{

    	this.user = JSON.parse(localStorage.getItem('user'));
     	this.Cusername = this.user.username;
     	this.Cemail = data.email;
     	this.CbName = data.businessName;
     	this.Clocation = data.address;
     	this.Cphone = data.phone;
      this.CFirstname=data.firstname;
      this.CLastname=data.lastname;
      this.CCreditCardInfo=data.creditcardinfo;
      this.Cbdate = data.birthdate;
    });
  }
  onClientseditProfileSubmit(){
    const client = {Firstname:this.Firstname,
    Lastname:this.Lastname,
  creditCArdInfo:this.creditCArdInfo,
    address:this.address,
	email:this.email,
	phone:this.phone,
  birthdate:this.birthdate
  };
    if(!(this.validateService.validateClient(client))){
      this.flashMessage.show('ERROR',{cssClass:'alert-danger',timeout:3000});
    }
    else{
   this.editprofile.editP(this.Firstname,this.Lastname,this.creditCArdInfo,
   this.address,this.email,this.phone,this.birthdate).subscribe(data => {
   	      location.reload();

   })


  this.flashMessage.show('SUCCESS',{cssClass:'alert-success',timeout:3000});
    }

}

onClientsChangePasswordSubmit(){
 this.changepw.editPassword(this.username,this.currentPassword,this.newPassword,this.newPasswordValidation).subscribe(data => {
   location.reload();
 })
}



}
