import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travail en groupe GIT';
  message: string = "Miryem"
  changeTextColor()
  {
    alert('Text color changed')
  }
}
