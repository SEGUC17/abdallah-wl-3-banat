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
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { BproviderComponent } from './components/bprovider/bprovider.component';
import {GetReviewsService} from './services/get-reviews.service';
import {PostReviewsService} from './services/post-reviews.service';
import { ReviewsComponent } from './components/reviews/reviews.component';


const appRoutes: Routes =  [
  {path:'', component: GuestsComponent},
  {path:'login',component:LoginComponent},
  {path:'bproviders',component:GuestsComponent},
  {path:'register',component:RegisterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    GuestsComponent,
    LoginComponent,
    RegisterComponent,
    BproviderComponent,
    ReviewsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [AuthService,GetReviewsService,PostReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
