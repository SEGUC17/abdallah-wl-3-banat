import { Component, OnInit } from '@angular/core';
import { ServiceeditService } from '../../services/serviceedit.service';
import {ViewservicesService } from '../../services/viewservices.service';
import {Router} from '@angular/router';


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
  Services:any;

  constructor(private serviceeditservice : ServiceeditService,private viewservicesservice:ViewservicesService,private router:Router) { }

  ngOnInit() {
     this.viewservicesservice.getBusiness().subscribe(business=>{this.business=business});
  }



  onEditSubmit(){
  	const service = {
  		name:this.name,
  		price:this.price,
  		description:this.description
  	}
    this.serviceid = localStorage.getItem('serviceid');
    this.serviceeditservice.EditService(this.business._id,this.serviceid,service).subscribe(Service =>{this.Services=Service});
    localStorage.removeItem('serviceid');
    this.router.navigate(['Bprovider']);
  }


}
