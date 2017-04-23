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
  newAnnouncement: any;

  constructor(private getBproviderService:GetBproviderService) { }

  ngOnInit() {

    this.business = this.getBproviderService.getBprovider().subscribe(Profile => {
      console.log(Profile);
      console.log(Profile.Business_info);  
      this.MyInfo = Profile.My_Info;
      this.business = Profile.Business_info;
      this.services = Profile.Business_info.services;
      this.questions = Profile.Business_info.questions;
      this.reviews = Profile.Business_info.reviews;
      this.announcements= Profile.Business_info.announcements;    
      
  })
    
}

  postAnnouncement(){
    this.getBproviderService.postAnnouncement(this.business._id,{description:this.newAnnouncement}).subscribe(data => {
        console.log(data);
    });

  }
  



}
