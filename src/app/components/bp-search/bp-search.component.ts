import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {ClientsService} from '../../services/clients.service';
import{Router} from '@angular/router'
import{BpServicesService} from '../../services/bp-services.service';
import { FilterPipe } from '../../filter.pipe'

@Component({
  moduleId: module.id,
  selector: 'app-bp-search',
  templateUrl: './bp-search.component.html',
 
  styleUrls: ['./bp-search.component.css']

})
export class BpSearchComponent implements OnInit {

  businesses:any;

  constructor(private validateService: ValidateService ,
  private flashMessage:FlashMessagesService,
  private AuthService: AuthService,
  private router:Router,
  private BpServicesService:BpServicesService
  ) { }

  ngOnInit() {
    this.BpServicesService.getAllBusiness().subscribe(businesses =>{
  this.businesses = businesses;

  console.log(businesses);
    })
  }
  

  onBpSearch(){
    console.log(123);   
   this.BpServicesService.searchBusiness(this.businesses).subscribe(data => {
   console.log(data);
   })
  }

}
