import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';
import {ClientsChangePasswordService} from '../../services/clients-change-password.service';
import {ValidateService} from '../../services/validate.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import { ViewService } from '../../services/view.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
profile:Object;
username:string;
currentPassword:string;
newPassword:string;
newPasswordValidation:string;

Firstname: any;
Lastname: any;
creditCArdInfo:any;
address: any;
email: any;
profilefirstname:any;
profilelastname:any;
profileemail:any;
profileaddress:any;
profilephone:any;
profilebirthdate:any;
businesses:any;
  TopBusinesses:any;
  search:any;
searchedBusinesses:any;


  constructor(private authService:AuthService,private changepw:ClientsChangePasswordService ,
  private ClientsService :ClientsService ,private viewService:ViewService, private router:Router,private validateService:ValidateService,private flashMessages:FlashMessagesService) { }


  ngOnInit() {
  this.authService.getProfile().subscribe(profile =>{
  this.profilefirstname = profile.firstname;
  this.profilelastname = profile.lastname;
  this.profileemail = profile.email;
  this.profileaddress = profile.address;
  this.profilephone = profile.phone;
  this.profilebirthdate = profile.birthdate;

  }/*,
   err =>{
  return false;
  }*/
  )
  this.viewService.getAllBusiness().subscribe(businesses =>{
this.businesses = businesses;
  })
  }

  onShowProfile(){
 this.ngOnInit();
  }

  topBusinesses(){

  this.viewService.getTopBusiness().subscribe(TopBusinesses =>{
  this.TopBusinesses = TopBusinesses;
  })
}

searchForBusiness(){
  this.viewService.searchBusinessUpdated(this.search).subscribe(Businesses =>{


  this.searchedBusinesses = Businesses.businessName;
  })

}

onButtonClicked(event){
  var id = event.target.value;
  localStorage.setItem('businessID',id);
  this.router.navigate(['GBdetails']);
  console.log(this.businesses)
}

  onClientseditProfileSubmit(){
    const client = {Firstname:this.Firstname,
    Lastname:this.Lastname,
    creditCArdInfo:this.creditCArdInfo,
    address:this.address,
	email:this.email};
    if(!(this.validateService.validateClient(client))){
      this.flashMessages.show('ERROR',{cssClass:'alert-danger',timeout:3000});
    }
    else{
   this.ClientsService.editP(this.Firstname,this.Lastname,this.creditCArdInfo,
   this.address,this.email).subscribe(data => {
   	      location.reload();

   })


  this.flashMessages.show('SUCCESS',{cssClass:'alert-success',timeout:3000});
    }

}



  onClientsChangePasswordSubmit(){
   this.changepw.editPassword(this.username,this.currentPassword,this.newPassword,this.newPasswordValidation).subscribe(data => {
     location.reload();
   })
  }



}
