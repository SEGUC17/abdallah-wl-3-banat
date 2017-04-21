import { Component, OnInit } from '@angular/core';
import {GetReviewsService} from '../../services/get-reviews.service' ;
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

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
