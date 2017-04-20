import { Component, OnInit , Input } from '@angular/core';
import { GetBusinessService } from '../../services/get-business.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-guest-view-business',
  templateUrl: './guest-view-business.component.html',
  styleUrls: ['./guest-view-business.component.css']
})
export class GuestViewBusinessComponent implements OnInit {

  private id: String;

  business: any;
  private services: any;
  private reviews: any;
  private questions: any;
  private announcements: any;

  constructor(private getBusinessService: GetBusinessService,
              private router: Router,
              private route: ActivatedRoute
              ){ }

  ngOnInit() {
    this.id = localStorage.getItem('businessID');
    this.business = this.getBusinessService.guestGetBusiness(this.id).subscribe(Business => {
      this.business = Business;
      this.services = Business.services;
      this.questions= Business.questions;
      this.reviews= Business.reviews;
      this.announcements= Business.announcements;      
  })
    
  }

}
