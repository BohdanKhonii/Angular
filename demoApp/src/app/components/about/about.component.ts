import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name="dsas";
  sum='';
  showName(name,lastName) {
    this.sum=`${name} ${lastName}`;
    return this.sum;
  } 
  Sum=0;
  sumArgs(arg1,arg2){
    this.Sum=+arg1+ +arg2;
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
