import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {LogService} from '../shared/logServices/log-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, /*private logservice: LogService*/ ) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  homeToDetails(): void{
    this.router.navigateByUrl('detail');
    //this.logservice.homeToDetail();
  }

}
