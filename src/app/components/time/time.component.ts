import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  date: string = ''
  format: string = ''

  constructor() { }

  ngOnInit(): void {
    this.getTime
  }

  getTime(){
    console.log(this.date,this.format)
  }

  

}
