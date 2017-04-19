import { Component, OnInit } from '@angular/core';
import { ViewservicesService } from '../../services/viewservices.service';
import { GetBusinessService } from '../../services/get-business.service';


@Component({
  selector: 'app-bprovider',
  templateUrl: './bprovider.component.html',
  styleUrls: ['./bprovider.component.css']
})
export class BproviderComponent implements OnInit {
  
  

  constructor(private viewservicesservice: ViewservicesService, private getBusinessService: GetBusinessService) { 


  }
  ngOnInit() {
  }

  viewBusinessProfile(Business){
     console.log(Business);

  }

  onBusinessSelected(event){
      var id = event.attributes.value;   
      var Business = this.getBusinessService.clientGetBusiness(id);
      this.viewBusinessProfile(Business);
      this.router.navigate([])
  }


}
