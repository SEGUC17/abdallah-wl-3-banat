import { Component, OnInit } from '@angular/core';
import {ViewservicesService } from '../../services/viewservices.service';
import { GetBproviderService } from '../../services/get-bprovider.service';
import {BproviderService} from '../../services/bprovider.service';
import {ServiceeditService} from '../../services/serviceedit.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { ViewService } from '../../services/view.service';
import { ViewquestionsService } from '../../services/viewquestions.service';
import {AnswerqService} from '../../services/answerq.service';
import {ValidateService} from '../../services/validate.service';
import {DeleteserviceService} from '../../services/deleteservice.service';
import {GetReviewsService} from '../../services/get-reviews.service';


@Component({
  selector: 'app-bprovider',
  templateUrl: './bprovider.component.html',
  styleUrls: ['./bprovider.component.css']
})
export class BproviderComponent implements OnInit {

	services:any;
	business:any;
  providerFirstname:any;
  providerLastname:any;
  providerEmail:any;
  providerBirthdate:any;
  id:any;
  businesses:any;
  TopBusinesses:any;
  announcements:any;
  newAnnouncement: any;
  isDec:boolean;
  businessName:any;
  description:any;
  location:any;
  phoneNumber:any;
  info:any;
  user:any;
  answer:any;
  x:any;
  help:any;
  questions: any;
  search:any;
searchedBusinesses:any;
reviews: any;
newReview: any;


  constructor(private viewservicesservice: ViewservicesService,
    private editservice:ServiceeditService,
    private flashmessage:FlashMessagesService,
    private router:Router,
    private authservice:AuthService,
    private viewService:ViewService,
    private getBproviderService: GetBproviderService,
    private bproviderservice: BproviderService,
    private validateservice : ValidateService,
    private viewquestionsservice: ViewquestionsService,
    private AnswerqService:AnswerqService,
    private deleteService:DeleteserviceService,
    private getReviews: GetReviewsService
   ) { }

  ngOnInit() {
   this.business = this.getBproviderService.getBprovider().subscribe(Profile => {

      if(!Profile.success&&Profile.unauthorized){
        this.authservice.logout();
         this.router.navigate(['Login']);
         this.flashmessage.show('Only business providers are allowed to visit this page.',{cssClass:'alert-danger',timeout:3000});
      }
      else if(!Profile.success&&!Profile.unauthorized){
     this.flashmessage.show(Profile.msg,{cssClass:'alert-danger',timeout:3000});
   }
   else if(Profile.success){
     this.business = Profile.Business;
     this.announcements= Profile.Business.announcements;
     this.providerFirstname = Profile.Provider.firstname;
     this.providerLastname = Profile.Provider.lastname;
     this.providerEmail = Profile.Provider.email;
     this.providerBirthdate = Profile.Provider.birthdate;

      /*this.MyInfo = Profile.Provider;
      this.business = Profile.Business;
      this.services = Profile.Business.services;
      this.questions = Profile.Business.questions;
      this.reviews = Profile.Business.reviews;
      this.announcements= Profile.Business.announcements;
      console.log(this.MyInfo);*/
      }

  })


    this.user = JSON.parse(localStorage.getItem('user'));
    this.viewService.getAllBusiness().subscribe(businesses =>{
  this.businesses = businesses;
  })



  }

 DeleteService(event){
      var serviceid= event.target.value;
    this.deleteService.DeleteService(serviceid).subscribe(service =>{

     if(service.Success){
        this.flashmessage.show('Service is deleted Successfully', {cssClass: 'alert-success', timeout: 3000});
        location.reload();
      } else {
        this.flashmessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
      }
    });
 }

      ViewReviews(){
     this.id= this.business.bproviderid;
    this.getReviews.GetReviews(this.id).subscribe( Reviews => {
    this.reviews= Reviews.Reviews;
    });
  }

searchForBusiness(){
  this.viewService.searchBusinessUpdated(this.search).subscribe(Businesses =>{


  this.searchedBusinesses = Businesses.businessName;
  })

}


  ViewService(){
  	this.viewservicesservice.viewServices(this.business._id).subscribe(service =>{
   		this.services=service.services;
       if(!service.success){
         this.flashmessage.show(service.msg,{cssClass:'alert-danger',timeout:3000});
       }
   	});
  }

  getServiceID(event){
    this.id = event.target.value;
    localStorage.setItem('serviceid',this.id);
  }

  topBusinesses(){

  this.viewService.getTopBusiness().subscribe(TopBusinesses =>{
  this.TopBusinesses = TopBusinesses;
  })
}

onButtonClicked(event){
  var id = event.target.value;
  localStorage.setItem('businessID',id);
  this.router.navigate(['GBdetails']);
}

postAnnouncement(){
    this.getBproviderService.postAnnouncement(this.business._id,{description:this.newAnnouncement}).subscribe(data => {
    location.reload();
    });

  }

  isDeclined(){
 return localStorage.getItem('isDeclined') == 'true'? true:false;
 }

 onClickCreate(){
var business = {
  businessName:this.businessName,
  location:this.location,
  phone:this.phoneNumber,
  description:this.description,
  info:this.info
};

this.bproviderservice.createBusinessIfDeclined(business).subscribe(data =>{
  if(data.success){
    localStorage.setItem('isDeclined','false');
    this.flashmessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
    location.reload();
  }

})
}

viewquestions(){
    this.viewquestionsservice.viewQuestions(this.business._id).subscribe(questions => {this.questions = questions});
  }
onAnswerSubmit(id){
    const ans= this.answer;
if(this.validateservice.validateAnswer(this.answer)){

  this.AnswerqService.answerQuestion({answer:ans},id).subscribe( data=>{
          console.log(data);
          console.log('success');
          //this.Router.navigate(['/']);

  });
this.flashmessage.show('Answer submitted succesfully',{cssClass:'alert-success',timeout :3000});
}
else{
    this.flashmessage.show('Please enter an answer!',{cssClass:'alert-danger',timeout :3000});

}
this.viewquestions();

}

onButtonClicked2(event){
    this.x=event.target.value;

  console.log(event.target.value);
  this.help=event.target.value;
  //  this.AnswerqService.answerQuestion(answer, event.target.value).subscribe(data=>{
  //this.onAnswerSubmit(event.target.value);


 // });

}
onButtonClicked3(event){

console.log('log');
 // console.log(event.target.value);
  console.log(this.help);
console.log('log');
this.x=null;
  //this.help=event.target.value;
  //  this.AnswerqService.answerQuestion(answer, event.target.value).subscribe(data=>{
this.onAnswerSubmit(event.target.value);
this.help=null;
this.answer=null;
location.reload();



 // });

}

deleteAnnouncement(index){
    this.getBproviderService.deleteAnnouncement(index).subscribe(announcements => {this.announcements = announcements});
    location.reload();
  }




}
