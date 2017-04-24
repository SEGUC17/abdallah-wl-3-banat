import { Component, OnInit } from '@angular/core';
import {AdminsService} from '../../services/admins.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	clients:any;
	id:any;
	bool:any;
	result:any;
  applications:any;
  providers:any;

  constructor(private router:Router,
              private adminsservice:AdminsService,
              private flashmessage:FlashMessagesService,
              private authservice: AuthService) { }

  ngOnInit() {
    this.adminsservice.getapplications().subscribe(application =>{
      if(!application.success&&application.unauthorized){
       this.authservice.logout();
       this.router.navigate(['Login']);
       this.flashmessage.show('Only Admins are allowed to visit this page.',{cssClass:'alert-danger',timeout:3000});
      }
      
      else if(application.success){
        this.applications = application.applications;
      }
      });
    this.adminsservice.viewProviders().subscribe(data =>{
          this.providers=data.providers});

  }

  ViewClients(){
  
  	this.adminsservice.viewClients().subscribe(client => {
      this.clients=client.result;
      if(!client.success){
        this.flashmessage.show(client.msg,{cssClass:'alert-danger',timeout:3000});

      }
    });

  }

   BanOrUnban(event,bool){
  	this.id = event.target.value;
  	this.bool = bool;
  	this.adminsservice.banorUnban(this.id,this.bool).subscribe(result =>{
    if(result.success){
      location.reload();
      this.flashmessage.show(result.msg,{cssClass:'alert-success',timeout:3000});

    }
    else{
      this.flashmessage.show(result.msg,{cssClass:'alert-danger',timeout:3000});
    }
    });
    
  }

  acceptOrDecline(event,approval){
    this.adminsservice.acceptOrDecline(event.target.value,approval).subscribe(application =>{
      location.reload();

    });
  }

  onRemoveProvider(event){
         this.adminsservice.removeProvider(event.target.value).subscribe(data=>{});
         location.reload();
}








}
