
import { Component, OnInit } from '@angular/core';
import {ViewService} from '../../services/view.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

businesses:any;
TopBusinesses:any;
search:string;
searchedBusinesses:any;
	
  constructor(private viewService:ViewService) { 
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
searchForBusiness(){
  console.log(this.search);
  this.viewService.searchBusinessUpdated(this.search).subscribe(Businesses =>{
  
  console.log("hi");
  console.log(Businesses.businessName);
  this.searchedBusinesses = Businesses.businessName;
  })

}

}
