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

clientusername:any;
clientpassword:any;
clientfirstname:any;
clientlastname:any;
clientemail:any;
clientAddress:any;
creditcardinfo:any;
clientbirthdate:any;
clientphone:any;
bproviderusername:any;
bproviderpassword:any;
bproviderfirstname:any;
bproviderlastname:any;
bprovideremail:any;
businessName:any;
bproviderlocation:any;
bproviderphone:any;
bproviderbirthdate:any;
bproviderinfo:any;
bproviderdescription:any;


  constructor(private flashMessage:FlashMessagesService,
  private router:Router,
  private authService:AuthService) { }

  ngOnInit() {
  }

  onRegisterSubmitClient(){
      const client = {
      username:this.clientusername,
      password:this.clientpassword,
      firstname:this.clientfirstname,
      lastname:this.clientlastname,
      email:this.clientemail,
      address:this.clientAddress,
      creditcardinfo:this.creditcardinfo,
      birthdate:this.clientbirthdate,
      phone:this.clientphone
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
    const bprovider = {
      username:this.bproviderusername,
      password:this.bproviderpassword,
      firstname:this.bproviderfirstname,
      lastname:this.bproviderlastname,
      email:this.bprovideremail,
      location:this.bproviderlocation,
      phone:this.bproviderphone,
      businessName:this.businessName,
      birthdate:this.bproviderbirthdate,
      description:this.bproviderdescription,
      info:this.bproviderinfo

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
