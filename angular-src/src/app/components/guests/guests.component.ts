import { Component, OnInit } from '@angular/core';
import { ViewservicesService } from '../../services/viewservices.service';
import { GetBusinessService } from '../../services/get-business.service';


@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  constructor(private viewservicesservice: ViewservicesService, private getBusinessService: GetBusinessService) {

   }

  ngOnInit() {
  }

  viewBusinessProfile(Business){
     console.log(Business);
  }

  onBusinessSelected(event){
      var id = event.attributes.value;   
      var Business = this.getBusinessService.guestGetBusiness(id);
  }
}
