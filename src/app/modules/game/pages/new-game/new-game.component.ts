import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../../../shared/user.model';

@Component({
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getPlayers();
    // this.playerService.toggleStatus();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(this.fillPlayers.bind(this));
  }

  logout() {
    this.authService.signOut();
  }

  fillPlayers(players: Player[]) {
    this.players = players.filter((p) => p.online === true);
  }
}
