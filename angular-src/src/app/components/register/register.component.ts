import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

username:any;
password:any;
firstname:any;
lastname:any;
email:any;
address:any;
creditcardinfo:any;
birthdate:any;
businessName:any;
phone:any;
location:any;
info:any;
description:any;


  constructor(private flashMessage:FlashMessagesService,
  private router:Router,
  private authService:AuthService) { }

  ngOnInit() {
  }

  onRegisterSubmitClient(){
    //if(!this.username || !this.password || !this.firstname || !this.lastname || !this.email || !this.address || !this.creditcardinfo || !this.birthdate || !this.phone || isNaN(this.phone)){
    //  this.flashMessage.show('Wrong data entry',{cssClass:'alert-danger',timeout:3000});
    //  return;
//  }
      const client = {
      username:this.username,
      password:this.password,
      firstname:this.firstname,
      lastnane:this.lastname,
      email:this.email,
      address:this.address,
      creditcardinfo:this.creditcardinfo,
      birthdate:this.birthdate,
      phone:this.phone
    }
    this.authService.registerClient(client).subscribe(data => {
      if(data.success){
      this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
      this.router.navigate(['login']);
    }
      else{
      this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
      this.router.navigate(['register']);
    }
    })

  }
  onRegisterSubmitbProvider(){
    if(!this.username || !this.password || !this.firstname || !this.lastname || !this.email || !this.location || !this.phone ||
       !this.businessName || !this.description || !this.info || isNaN(this.phone)){
         this.flashMessage.show('Wrong data entry',{cssClass:'alert-danger',timeout:3000});
         return;
       }

    const bprovider = {
      username:this.username,
      password:this.password,
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      location:this.location,
      phone:this.phone,
      businessName:this.businessName,
      description:this.description,
      info:this.info

    }
    this.authService.registerbProvider(bprovider).subscribe(data =>{
      if(data.success){
        this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['login']);
      }else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['register']);
      }
    })
  }

}
