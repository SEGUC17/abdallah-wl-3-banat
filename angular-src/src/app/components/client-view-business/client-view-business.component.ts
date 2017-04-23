import { Component, OnInit } from '@angular/core';
import { GetBusinessService } from '../../services/get-business.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
  selector: 'app-client-view-business',
  templateUrl: './client-view-business.component.html',
  styleUrls: ['./client-view-business.component.css']
})
export class ClientViewBusinessComponent implements OnInit {

  private id: String;

  business: any;
  private services: any;
  private reviews: any;
  private questions: any;
  private announcements: any;

  private flag: boolean;


  constructor(private getBusinessService: GetBusinessService,
              private router: Router
              ) { }

  ngOnInit() {
    this.flag = false;
    this.id = localStorage.getItem('businessID');
    this.business = this.getBusinessService.guestGetBusiness(this.id).subscribe(Business => {
      this.business = Business;
      this.services = Business.services;
      this.questions= Business.questions;
      this.reviews= Business.reviews;
      this.announcements= Business.announcements;    
      this.flag = false;  
  })
  }

  isOne(){

    var rating = +localStorage.getItem('rating');
    
    if( rating <= 1)
        return true;
    else
        return false;
  }
    isTwo(){
         var rating = +localStorage.getItem('rating');
    if(rating > 1  && rating <= 2)
        return true;
    else
        return false;
  }
    isThree(){
         var rating = +localStorage.getItem('rating');
    if(rating > 2  && rating <= 3)
        return true;
    else
        return false;
  }
    isFour(){
         var rating = +localStorage.getItem('rating');
    if(rating > 3  && rating <= 4)
        return true;
    else
        return false;
  }
    isFive(){
         var rating = +localStorage.getItem('rating');
    if(rating > 4  && rating <= 5)
        return true;
    else
        return false;

  }


}
