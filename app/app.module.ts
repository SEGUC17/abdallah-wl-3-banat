import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { GuestsComponent } from './components/guests/guests.component';
import { LoginComponent } from './components/login/login.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { RegisterComponent } from './components/register/register.component';

import{ BpServicesService} from './services/bp-services.service';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { ViewService } from './services/view.service';
import{ClientsChangePasswordService }from './services/clients-change-password.service';
import {ClientsService} from './services/clients.service';
import { BpSearchComponent } from './components/bp-search/bp-search.component';
import { ClientsChangePasswordComponent } from './components/clients-change-password/clients-change-password.component';
import { FilterPipe } from './filter.pipe';
import { ClientsSearchComponent } from './components/clients-search/clients-search.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes =  [
  {path:'', component: GuestsComponent},
  {path:'login',component:LoginComponent},
  {path:'bproviders',component:GuestsComponent},
  {path:'register',component:RegisterComponent},
  {path:'', component: ClientsComponent},
{path:'editClientProfile',component:ClientsComponent},
{path:'editClientPassword',component:ClientsChangePasswordComponent},
{path:'bpSearch', component:BpSearchComponent},
  {path:'viewbusiness', component: ViewAllComponent},
  {path:'client',component:ClientsComponent},
  {path:'Profile',component:ProfileComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    GuestsComponent,
    LoginComponent,
    RegisterComponent,
    BpSearchComponent,
    ClientsChangePasswordComponent,
    FilterPipe,
    ViewAllComponent,
    ClientsSearchComponent,
    ProfileComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,ClientsService,
  ClientsChangePasswordService,BpServicesService,ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
