import { Component } from '@angular/core';
import { faCoffee, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fabars = faBars;
  title = 'indicadores';
}
