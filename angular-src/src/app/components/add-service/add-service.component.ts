import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
   name:String;
   description:String;
   price:Number;
   picture:String;
   maxSlotClients:Number;
   slotDuration:Number;

  constructor(private validateservice :ValidateService,
              private flashmessage:FlashMessagesService,
              private authserive:AuthService,
              private router:Router) { }

ngOnInit(){}
  onAddingServiceSubmit(){
    const service = {
      name :this.name,
      description : this.description,
      price : this.price ,
      picture :this.picture,
      maxSlotClients:this.maxSlotClients,
      slotDuration:this.slotDuration




   }
 if(!this.validateservice.validateService(service)){
      this.flashmessage.show('Wrong Data Entry or Missing Fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

     this.validateservice.AddService(service).subscribe(data => {
     if(data){
        this.flashmessage.show('Service Added successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/Bprovider']);
      } else {
        this.flashmessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
      }
    });
     }





       }
