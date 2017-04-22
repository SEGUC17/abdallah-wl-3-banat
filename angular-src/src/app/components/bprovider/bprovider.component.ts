import { Component, OnInit } from '@angular/core';
import {ViewservicesService } from '../../services/viewservices.service';
import {ServiceeditService} from '../../services/serviceedit.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { ViewService } from '../../services/view.service';
import {DeleteserviceService} from '../../services/deleteservice.service'



@Component({
  selector: 'app-bprovider',
  templateUrl: './bprovider.component.html',
  styleUrls: ['./bprovider.component.css']
})
export class BproviderComponent implements OnInit {

	services:any;
	business:any;
  id:any;
  businesses:any;
  TopBusinesses:any;

  constructor(private viewservicesservice: ViewservicesService,
    private editservice:ServiceeditService,
    private deleteService:DeleteserviceService,
    private flashmessage:FlashMessagesService,
    private router:Router,
    private authservice:AuthService,
    private viewService:ViewService) { }

  ngOnInit() {
   this.viewservicesservice.getBusiness().subscribe(result=>{if(!result.success&&result.unauthorized){
       this.authservice.logout();
       this.router.navigate(['Login']);
       this.flashmessage.show('Only business providers are allowed to visit this page.',{cssClass:'alert-danger',timeout:3000});
   }
   else if(!result.success&&!result.unauthorized){
     this.flashmessage.show(result.msg,{cssClass:'alert-danger',timeout:3000});
   }
   else if(result.success){
     this.business = result.result;
   }
 });
   this.viewService.getAllBusiness().subscribe(businesses =>{
  this.businesses = businesses;
  })
   
}



 DeleteService(event){
		  var serviceid= event.target.value;
      console.log(serviceid)
  	this.deleteService.DeleteService(serviceid).subscribe(service =>{

     if(service.Success){
        this.flashmessage.show('Service is deleted Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['bprovider']);
      } else {
        this.flashmessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
      }
    });
 }


  ViewService(){
  	this.viewservicesservice.viewServices(this.business._id).subscribe(service =>{
   		this.services=service.services;
       if(!service.success){
         this.flashmessage.show(service.msg,{cssClass:'alert-danger',timeout:3000});
       }
   	});
  }

  getServiceID(event){
    this.id = event.target.value;
    localStorage.setItem('serviceid',this.id);
  }

  topBusinesses(){
  
  this.viewService.getTopBusiness().subscribe(TopBusinesses =>{
  this.TopBusinesses = TopBusinesses;
  })
}

onButtonClicked(event){
  var id = event.target.value;
  localStorage.setItem('businessID',id);
  this.router.navigate(['GBdetails']);
}

  


}
