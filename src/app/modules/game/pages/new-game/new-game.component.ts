import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../../shared/player.model';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPlayers() {
    this.subscription = this.playerService
      .getPlayers()
      .subscribe(this.fillPlayers.bind(this));
  }

  logout() {
    this.authService.signOut();
  }

  fillPlayers(players: Player[]) {
    this.players = players.filter((p) => p.online);
  }
}
