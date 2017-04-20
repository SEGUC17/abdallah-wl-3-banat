import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {ClientsService} from '../../services/clients.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-bp-search',
  templateUrl: './bp-search.component.html',
  styleUrls: ['./bp-search.component.css']
})
export class BpSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
