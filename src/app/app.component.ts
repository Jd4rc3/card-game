import { Component } from '@angular/core';
import { AuthService } from './modules/login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'card-game';
}
