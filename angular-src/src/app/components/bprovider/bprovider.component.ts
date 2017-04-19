import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ViewReviewsService} from '../../services/get-reviews.service' ;


@Component({
  selector: 'app-bprovider',
  templateUrl: './bprovider.component.html',
  styleUrls: ['./bprovider.component.css']
})
export class BproviderComponent implements OnInit {

constructor(private flashMessage:FlashMessagesService,
private router:Router,
private viewreviews:ViewReviewsService,
private authService:AuthService) { }

ngOnInit() {
}

OnViewReviews(event){
 var id = event.attributes.value; // hnshof ezay ngeb el id
 this.viewreviews.GetReviews(id);
}
}
