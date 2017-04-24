import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../services/reservation.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  event=[];
  dateChosen:any;
  timeChosen:any;
  isValid = false;
  constructor(private reservationService:ReservationService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  calendarOptions(){
    var data = JSON.parse(localStorage.getItem('events'));
  let calendarOptions:Object = {
    header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay, prevYear,nextYear'
        },
        fixedWeekCount : false,
        currentDate: '2016-09-12',
        editable: true,
        eventLimit: true,
        defaultTimedEventDuration: '00:30:00',
        events:data.events
      };
      return(calendarOptions);
    }
    chooseSlot(){
       var user = JSON.parse(localStorage.getItem('user'));
       this.reservationService.eventValidation({title:user.username,start:this.dateChosen+'T'+this.timeChosen+':00'}).subscribe(data =>{
        if(data.isValid){
          localStorage.setItem('chosenEvent',JSON.stringify({title:user.username,start:this.dateChosen+'T'+this.timeChosen+':00'}));
          this.flashMessage.show('The desired slot is available to be reserved!',{cssClass:'alert-success',timeout:6000});
          this.isValid = true;

        }else{
        this.flashMessage.show('The desired slot is not available to be reserved! Please choose another slot!',{cssClass:'alert-danger',timeout:3000});
      }
    })
  }
    openCheckout() {
     var handler = (<any>window).StripeCheckout.configure({
       key: 'pk_test_cSTf8NAIOj3u7MfvtLR32p2V',
       locale: 'auto',
       token: function (token: any) {
         var data = JSON.parse(localStorage.getItem('events'));
         var event = JSON.parse(localStorage.getItem('chosenEvent'));
         var businessId = localStorage.getItem('businessID');
         var serviceId = localStorage.getItem('serviceId');
         var start = event.start;
         var title = event.title
         var description = data.service.description;
         var price = data.service.price;
         var name = data.service.name;
         var info = {
           token:token.id,
           description:description,
           price:price,
           name:name,
           start:start,
           title:title,
           businessId:businessId,
           serviceId:serviceId
         };
         $.ajax({
    type: 'post',
    url: 'http://localhost:8080/clients/charge',
    data: info,
    dataType:'json',
    xhrFields: {
        withCredentials: false
    },
    headers: {

    },
    success: function (data) {
      if(data.success){
        var result= JSON.parse(localStorage.getItem('events'));
        var events = result.events;
        var chosenEvent = JSON.parse(localStorage.getItem('chosenEvent'));
        localStorage.removeItem('events');
        events.push(chosenEvent);
        localStorage.setItem('events',JSON.stringify(result));
        window.location.reload();
    }else{
      window.location.reload();
    }



    }
})
       }
     });

     handler.open({
       name:'Reserve for the desired slot',
     });

   }
   cancelReservation(){
     this.isValid = false;
     location.reload();
   }

}
