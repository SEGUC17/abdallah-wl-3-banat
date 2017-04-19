import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { GuestsComponent } from './components/guests/guests.component';
import { EditserviceComponent } from './components/editservice/editservice.component';
import { BproviderComponent } from './components/bprovider/bprovider.component';
import { ServiceeditService } from './services/serviceedit.service';
import {ViewservicesService } from './services/viewservices.service';
import { GetBusinessService } from './services/get-business.service'; 



const appRoutes: Routes =  [
  {path:'', component: GuestsComponent},
  {path:'EditService', component: EditserviceComponent},
  {path:'Bprovider', component: BproviderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    GuestsComponent,
    EditserviceComponent,
    BproviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceeditService,ViewservicesService,GetBusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
