import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  a=1;
  b=1;
  c=this.a+this.b;
  getValueC() {
    this.c++;
    console.log(this.c);
  }
}
