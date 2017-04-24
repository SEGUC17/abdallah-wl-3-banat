import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../services/view.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

	businesses:any;
  TopBusinesses:any;
  search:any;
searchedBusinesses:any;

  constructor(private viewService:ViewService,
  			private router:Router) { }

 ngOnInit() {

  this.viewService.getAllBusiness().subscribe(businesses =>{
  this.businesses = businesses;
  })
  }

topBusinesses(){
  
  this.viewService.getTopBusiness().subscribe(TopBusinesses =>{
  this.TopBusinesses = TopBusinesses;
  })
}

searchForBusiness(){
  this.viewService.searchBusinessUpdated(this.search).subscribe(Businesses =>{
  
  
  this.searchedBusinesses = Businesses.businessName;
  })

}

onButtonClicked(event){
  var id = event.target.value;
  localStorage.setItem('businessID',id);
  this.router.navigate(['GBdetails']);
}
}
