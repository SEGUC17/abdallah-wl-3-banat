import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PaginatePipe, PaginationService} from 'ng2-pagination';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { GetBusinessService } from './services/get-business.service';
import { GuestViewBusinessComponent } from './components/guest-view-business/guest-view-business.component';
import { ClientViewBusinessComponent } from './components/client-view-business/client-view-business.component'; 
import { ViewAllComponent } from './components/view-all/view-all.component'; 
import { ViewService } from './services/view.service';
import { AddServiceComponent } from './components/add-service/add-service.component';
import {ValidateService} from './services/validate.service';
import {ServiceeditService} from './services/serviceedit.service';
import {ViewservicesService} from './services/viewservices.service';
import {BproviderComponent} from './components/bprovider/bprovider.component';
import {EditserviceComponent} from './components/editservice/editservice.component';
import {DeleteserviceService} from './services/deleteservice.service';
import { LoginComponent } from './components/login/login.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';


const appRoutes: Routes =  [
  {path:'', component: ViewAllComponent},
  {path:'Client/ViewBusiness', component: ClientViewBusinessComponent},
  {path:'ViewBusiness', component: GuestViewBusinessComponent},
  {path:'login',component:LoginComponent},
  {path:'bproviders',component:BproviderComponent},
  {path:'addService',component:AddServiceComponent},
  {path:'editService',component:EditserviceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuestViewBusinessComponent,
    ClientViewBusinessComponent,
    ViewAllComponent,
    LoginComponent,
    EditserviceComponent,
    BproviderComponent,
    AddServiceComponent,
    EditserviceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
    
  ],
  providers: [GetBusinessService,ViewService,PaginationService,DeleteserviceService,ViewservicesService,ServiceeditService,ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
