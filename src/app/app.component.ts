import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Template Driven Project';

  userdata:any = {};

  form_data(data:NgForm)
  {
    this.userdata = data;
  }
}
