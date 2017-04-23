import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../services/view.service';
import { Router, ActivatedRoute , NavigationExtras } from '@angular/router';
import { GetBusinessService } from '../../services/get-business.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  businesses:any;
  TopBusinesses:any;
	
  constructor(private viewService:ViewService,private router:Router,private getBusinessService:GetBusinessService) { 
  	}

  ngOnInit() {

  this.viewService.getAllBusiness().subscribe(businesses =>{
  this.businesses = businesses;
  })
  }

func(){
  
  this.viewService.getTopBusiness().subscribe(TopBusinesses =>{
  this.TopBusinesses = TopBusinesses;
  })
}

onButtonClicked(event){
  var id = event.target.value;
  console.log(id);
  localStorage.setItem('businessID',id);
  this.router.navigate(['/ViewBusiness']);
  this.getBusinessService.guestGetBusiness(id).subscribe(Business => {
      localStorage.setItem('rating',Business.rating);
      console.log(Business.rating);
  });

}

}



