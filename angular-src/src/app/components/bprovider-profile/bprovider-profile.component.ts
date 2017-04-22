import { Component, OnInit } from '@angular/core';
import { GetBproviderService } from '../../services/get-bprovider.service';

@Component({
  selector: 'app-bprovider-profile',
  templateUrl: './bprovider-profile.component.html',
  styleUrls: ['./bprovider-profile.component.css']
})
export class BproviderProfileComponent implements OnInit {

  MyInfo: any;
  business: any;
  services: any;
  questions: any;
  reviews: any;
  announcements: any;

  constructor(private getBproviderService:GetBproviderService) { }

  ngOnInit() {

    this.business = this.getBproviderService.getBprovider().subscribe(Profile => {
      this.MyInfo = Profile.My_Info
      this.business = Profile.Business_Info;
      this.services = Profile.Business_Info.services;
      this.questions = Profile.Business_Info.questions;
      this.reviews = Profile.Business_Info.reviews;
      this.announcements= Profile.Business_Info.announcements;      
  })
    
  }
  



}
