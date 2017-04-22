import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { GetBusinessService } from './services/get-business.service';
import { GetBproviderService } from './services/get-bprovider.service';
import { GuestViewBusinessComponent } from './components/guest-view-business/guest-view-business.component';
import { ClientViewBusinessComponent } from './components/client-view-business/client-view-business.component'; 
import { ViewAllComponent } from './components/view-all/view-all.component'; 
import { ViewService } from './services/view.service';
import { BproviderProfileComponent } from './components/bprovider-profile/bprovider-profile.component';


const appRoutes: Routes =  [
  {path:'', component: ViewAllComponent},
  {path:'Client/ViewBusiness', component: ClientViewBusinessComponent},
  {path:'ViewBusiness', component: GuestViewBusinessComponent},
  {path:'Provider/MyProfile', component: BproviderProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuestViewBusinessComponent,
    ClientViewBusinessComponent,
    ViewAllComponent,
    BproviderProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetBusinessService,ViewService,PaginationService,GetBproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
