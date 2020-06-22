import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  show = true;
  fullName: string;
  email: string;

  creationFunction(event: any){
    this.fullName = event.fullName.value;
    this.email = event.email.value;
    console.log(event);
  }
}
