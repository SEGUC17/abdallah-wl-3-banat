import { Component, OnInit } from '@angular/core';
import { ServiceeditService } from '../../services/serviceedit.service';
import {ViewservicesService } from '../../services/viewservices.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';



@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {

	name:String;
	price:number;
	description:String;
  business:any;
  serviceid:any;
  Service:any;

  constructor(private serviceeditservice : ServiceeditService,
    private viewservicesservice:ViewservicesService,
    private router:Router,
    private flashmessage:FlashMessagesService) { }

  ngOnInit() {
     this.viewservicesservice.getBusiness().subscribe(business=>{this.business=business.result});
  }



  onEditSubmit(){
  	const service = {
  		name:this.name,
  		price:this.price,
  		description:this.description
  	}
    this.serviceid = localStorage.getItem('serviceid');
    this.serviceeditservice.EditService(this.business._id,this.serviceid,service)
    .subscribe(Service =>{
      if(Service.success){
        this.router.navigate(['Bprovider']);
        this.flashmessage.show(Service.msg,{cssClass:'alert-success',timeout:3000});
      }
      else{
        this.router.navigate(['Bprovider']);
        this.flashmessage.show(Service.msg,{cssClass:'alert-danger',timeout:3000});
      }
    });

      

    localStorage.removeItem('serviceid');
  }


}
