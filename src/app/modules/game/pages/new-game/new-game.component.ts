import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../../shared/player.model';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import { WebsocketService } from '../../services/websocket.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  playersSubscription!: Subscription;
  uuid: string;

  constructor(
    private gameService: GameService,
    private webSocketService: WebsocketService,
    private authService: AuthService,
    private router: Router,
    private playerService: PlayerService
  ) {
    this.uuid = uuidv4();
  }

  ngOnInit(): void {
    this.getPlayers();
    this.webSocketService.connect(this.uuid).subscribe({
      next: () => this.router.navigate(['/game/games']),
    });
  }

  submit(data: any) {
    const { players: formPlayers } = data;
    const playersToSend = this.generatePlayersCommand(formPlayers);
    const { uid } = this.authService.getLoggedUser();

    this.gameService
      .createGame({
        gameId: this.uuid,
        players: playersToSend,
        mainPlayerId: uid,
      })
      .subscribe({
        next: console.log,
        error: console.error,
        complete: () => {
          this.router.navigate(['/board']);
        },
      });
  }

  ngOnDestroy(): void {
    this.playersSubscription.unsubscribe();
  }

  getPlayers() {
    this.playersSubscription = this.playerService
      .getPlayers()
      .subscribe(this.fillPlayers.bind(this));
  }

  private generatePlayersCommand(players: Player[]) {
    const { uid, displayName } = this.authService.getLoggedUser();
    return players.reduce(
      (previousValue, currentValue) => {
        return {
          ...previousValue,
          [currentValue.uid]: currentValue.displayName,
        };
      },
      { [uid]: displayName }
    );
  }

  logout() {
    this.authService.signOut();
  }

  fillPlayers(players: Player[]) {
    const loggedUser = this.authService.getLoggedUser();

    this.players = players.filter(
      (p) => p.uid !== loggedUser.uid && p.available
    );
  }
}
