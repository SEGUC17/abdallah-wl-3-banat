import { Component, OnInit } from '@angular/core';
import {BpeditprofileService} from '../../services/bpeditprofile.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-editbp-profile',
  templateUrl: './editbp-profile.component.html',
  styleUrls: ['./editbp-profile.component.css']
})
export class EditbpProfileComponent implements OnInit {

  Cusername:String;
Cpassword:String;
Cemail:String;
CbName:String;
Clocation:String;
Cphone:number;
Cinfo:String;
Cprofilepicture:String;
b:any;
user:any;
password:String;
email:String;
bName:String;
location:String;
phone:number;
info:String;
profilepicture:any;


  constructor(private bpeditprofile:BpeditprofileService, private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
//this.Cprofilepicture = '../../../../../uploads/';
this.bpeditprofile.getCU().subscribe(data =>{

	this.user = JSON.parse(localStorage.getItem('user'));
 	this.Cusername = this.user.username;
 	this.Cemail = data.Provider.email;
 	this.CbName = data.Business.businessName;
 	this.Clocation = data.Business.location;
 	this.Cphone = data.Business.phone;
 	this.Cinfo = data.Business.info;
 	this.Cprofilepicture = data.Business.profilepicture;
	this.b= data.Business;

});


}
  onEditPSubmit(){



    this.bpeditprofile.editP(this.password,this.email,this.bName,this.location,this.phone,this.info).subscribe(err =>
    {
    });
    this.flashMessage.show('You have successfuly updated your profile',{cssClass:'alert-success',timout:3000});

this.router.navigate(['Bprovider']);

  }
onPPchosen(fileInput){

this.profilepicture = fileInput.target.files[0];


//console.log(this.profilepicture);
    this.bpeditprofile.editPP(this.profilepicture).subscribe(data =>{
      console.log(data);
    })



}

}
