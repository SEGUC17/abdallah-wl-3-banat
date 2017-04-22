import { Component, OnInit } from '@angular/core';
import { GetBusinessService } from '../../services/get-business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-view-business',
  templateUrl: './client-view-business.component.html',
  styleUrls: ['./client-view-business.component.css']
})
export class ClientViewBusinessComponent implements OnInit {

  Business: any;


  constructor(private getBusinessService: GetBusinessService,
              private router: Router
              ) { }

  ngOnInit() {
  }


  onBusinessSelected(event){
      var id = event.target.value;   
      this.Business = this.getBusinessService.clientGetBusiness(id);
  }



}
