import { Component, OnInit } from '@angular/core';
import {GetReviewsService} from '../../services/get-reviews.service';
import {PostReviewsService} from '../../services/post-reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


private id :String;
private reviews: any;
private newReview: any;
private annoucements: any;

  constructor(private getReviews: GetReviewsService,
   private postReviews: PostReviewsService
  ) { 

  }

  ngOnInit() {
    //this.id= localStorage.getItem('BusinessID');
    this.id = '123456';
   // console.log('hi');
    this.getReviews.GetReviews(this.id).subscribe( Reviews => {
    this.reviews= Reviews.Reviews;
    console.log(this.reviews);

    this.ViewAnnoucement();

   });




}  



postReview(){ 
    //this.id= localStorage.getItem('BusinessID');
    console.log("yes");
    this.id = '123456';
this.postReviews.PostReviews(this.id,{description : this.newReview}).subscribe( data => {
  this.newReview=data
})

}

ViewAnnoucement(){
 //this.id= localStorage.getItem('BusinessID');
    this.id = '123456';
   // console.log('hi');
    this.getReviews.GetAnnoucements(this.id).subscribe( Annoucements => {
    this.annoucements= Annoucements.announcements; 
    console.log(this.annoucements);
    });

}

}

 

