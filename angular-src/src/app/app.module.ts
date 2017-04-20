import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { GetBusinessService } from './services/get-business.service';
import { GuestViewBusinessComponent } from './components/guest-view-business/guest-view-business.component';
import { ClientViewBusinessComponent } from './components/client-view-business/client-view-business.component'; 
import { ViewAllComponent } from './components/view-all/view-all.component'; 
import { ViewService } from './services/view.service';


const appRoutes: Routes =  [
  {path:'', component: ViewAllComponent},
  {path:'Client/ViewBusiness', component: ClientViewBusinessComponent},
  {path:'ViewBusiness', component: GuestViewBusinessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuestViewBusinessComponent,
    ClientViewBusinessComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetBusinessService,ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
