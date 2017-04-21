import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {GetReviewsService} from '../../services/get-reviews.service' ;


@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  constructor(private flashMessage:FlashMessagesService,
  private router:Router,
  private viewreviews:GetReviewsService) { }

  ngOnInit() {
  }

  OnViewReviews(event){
   var id = event.attributes.value; // hnshof ezay ngeb el id
   this.viewreviews.GetReviews(id);
  }
}
