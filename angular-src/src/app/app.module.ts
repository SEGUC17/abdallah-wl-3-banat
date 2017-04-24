import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import {GetBusinessService} from './services/get-business.service';
import {CalendarComponent} from "ap-angular2-fullcalendar";
import {ReservationService} from './services/reservation.service';
import {ReservationComponent} from './components/reservation/reservation.component';
import { ClientComponent } from './components/client/client.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { EditbpProfileComponent } from './components/editbp-profile/editbp-profile.component';
import { GuestbusinessdetailsComponent } from './components/guestbusinessdetails/guestbusinessdetails.component';
import { AdminComponent } from './components/admin/admin.component';
import { BproviderComponent } from './components/bprovider/bprovider.component';
import { EditserviceComponent } from './components/editservice/editservice.component';
import { GuestsComponent } from './components/guests/guests.component';
import { ServiceeditService } from './services/serviceedit.service';
import {ViewservicesService } from './services/viewservices.service';
import{AdminsService} from './services/admins.service';
import {ViewService} from './services/view.service';
import {GbdetailsService} from './services/gbdetails.service';
import {GetBproviderService} from './services/get-bprovider.service';
import {BproviderService} from './services/bprovider.service';
import {BpeditprofileService} from './services/bpeditprofile.service';
import {ViewquestionsService} from './services/viewquestions.service';
import {ValidateService} from './services/validate.service';
import {AnswerqService} from './services/answerq.service';
import {DeleteserviceService} from './services/deleteservice.service';
import {GetReviewsService} from './services/get-reviews.service';
import {PostReviewsService} from './services/post-reviews.service';
import {AskquestionService} from './services/askquestion.service';
import {ClientsService} from './services/clients.service';
import {ClientsChangePasswordService} from './services/clients-change-password.service';





const appRoutes: Routes =  [
  {path:'', component: GuestsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'EditService', component: EditserviceComponent},
  {path:'Bprovider', component: BproviderComponent},
  {path:'Admin',component:AdminComponent},
  {path:'GBdetails',component:GuestbusinessdetailsComponent},
  {path:'EditBpProfile',component:EditbpProfileComponent},
  {path:'AddService',component:AddServiceComponent},
  {path:'Profile',component:ClientComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    ReservationComponent,
    GuestsComponent,
    EditserviceComponent,
    BproviderComponent,
    AdminComponent,
    GuestbusinessdetailsComponent,
    EditbpProfileComponent,
    AddServiceComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [AuthService,GetBusinessService,ReservationService,ServiceeditService,
              ViewservicesService,AdminsService,
GbdetailsService,
GetBproviderService,
BproviderService,
BpeditprofileService,
ViewquestionsService,
ValidateService,
AnswerqService,
DeleteserviceService,
GetReviewsService,
PostReviewsService,
ClientsChangePasswordService,
ClientsService,ViewService, AskquestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
