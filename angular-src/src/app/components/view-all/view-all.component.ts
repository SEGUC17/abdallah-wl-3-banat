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

}



