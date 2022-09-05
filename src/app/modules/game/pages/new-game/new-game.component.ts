import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.playerService.printHi();
  }

  logout() {
    // this.authService.signOut().then(() => this.router.navigate(['/']));
  }
}
