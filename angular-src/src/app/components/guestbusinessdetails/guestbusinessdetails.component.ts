import { Component, OnInit } from '@angular/core';
import { GbdetailsService } from '../../services/gbdetails.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../services/auth.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import {ReservationService} from '../../services/reservation.service';
import {AskquestionService} from '../../services/askquestion.service';
import { PostReviewsService } from '../../services/post-reviews.service';



@Component({
  selector: 'app-guestbusinessdetails',
  templateUrl: './guestbusinessdetails.component.html',
  styleUrls: ['./guestbusinessdetails.component.css']
})
export class GuestbusinessdetailsComponent implements OnInit {
	 id: String;

  	business: any;
  	services: any;
  	reviews: any;
  	questions: any;
  	announcements: any;
    newReview: any;
    user:any;
    name:any;
    desc:any;
    inf:any;
    ph:any;
    loc:any;

  constructor(private gbdetails: GbdetailsService,
              private router: Router,
              private authservice:AuthService,
              private flashMessage:FlashMessagesService,
            private reservationService:ReservationService,
          private askquestionservice: AskquestionService,
          private postReviews: PostReviewsService) { }

  ngOnInit() {
  	this.id = localStorage.getItem('businessID');
    this.gbdetails.guestGetBusiness(this.id).subscribe(Business => {
      console.log(this.id);
      this.business = Business.Profile;
      this.name = Business.Profile.businessName;
      this.desc = Business.Profile.description;
      this.inf = Business.Profile.info;
      this.ph = Business.Profile.phone;
      this.loc = Business.Profile.location;
      this.services = this.business.services;
      this.questions= this.business.questions;
      this.reviews= this.business.reviews;
      this.announcements= this.business.announcements;
  })
  }

  postReview(){
    var user = JSON.parse(localStorage.getItem('user'));
    this.id= localStorage.getItem('businessID');
    this.postReviews.PostReviews(this.id,{description : this.newReview,name:user.username}).subscribe( data => {
      if(data.success){
        this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
        location.reload();
      }
      else
      this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});

    })

  }

  reserveSlot(event){
    var serviceId = event.target.value;
    localStorage.setItem('serviceId',serviceId);
    this.reservationService.getEvents().subscribe(data =>{
      if(data.success){
        localStorage.setItem('events',JSON.stringify(data));
        this.router.navigate(['reservation']);
      }else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        location.reload();
      }
    })

  }

  askQuestion(question) {
    this.askquestionservice.askQuestion(this.id, question).subscribe(Business => {this.questions = Business.questions});
    location.reload();
  }

  isClient(){
    if(!this.authservice.loggedIn())
      return false;
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user.type==0)
      return true;
    else
      return false;
  }

  onRate(rating){

console.log('a');

this.gbdetails.onRating(rating,this.id).subscribe(err =>{
  console.log(err);


});
location.reload();


    this.flashMessage.show('You have successfuly rated this business',{cssClass:'alert-success',timout:3000});

}

}
