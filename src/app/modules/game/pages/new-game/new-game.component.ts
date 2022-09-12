import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../../shared/player.model';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import { WebsocketService } from '../../services/websocket.service';
import { v4 as uuidv4 } from 'uuid';
import { AlertService } from '../../../shared/alert.service';

@Component({
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit, OnDestroy {
  visible: boolean = false;
  progress: number = 0;
  players: Player[] = [];
  playersSubscription!: Subscription;
  uuid: string;
  private registeredEvents: number = 0;
  private totalEvents: number = 2;

  constructor(
    private gameService: GameService,
    private webSocketService: WebsocketService,
    private authService: AuthService,
    private router: Router,
    private playerService: PlayerService,
    private alertServe: AlertService
  ) {
    this.uuid = uuidv4();
  }

  ngOnInit(): void {
    this.getPlayers();
    this.webSocketService.connect(this.uuid).subscribe({
      next: () => {
        this.visible = true;
        this.registeredEvents++;

        if (this.registeredEvents <= this.totalEvents)
          this.progress = (this.registeredEvents / this.totalEvents) * 100;

        if (this.registeredEvents === this.totalEvents) {
          setTimeout(() => {
            this.progress = 100;
            this.navigate();
          }, 1500);
        }
      },
      error: () => {
        this.alertServe.errorMessage();
      },
    });
  }

  submit(data: any) {
    this.totalEvents += data.players.length;

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
        error: console.error,
      });
  }

  private navigate() {
    return this.router.navigate(['/game/games']);
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
