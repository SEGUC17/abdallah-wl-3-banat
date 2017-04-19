import { Component, OnInit } from '@angular/core';
import { ServiceeditService } from '../../services/serviceedit.service';

@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {

	name:String;
	price:number;
	description:String;

  constructor(private serviceeditservice : ServiceeditService) { }

  ngOnInit() {
  }

  onEditSubmit(){
  	const service = {
  		name:this.name,
  		price:this.price,
  		description:this.description
  	}
    this.serviceeditservice.editService(service);
  }


}
