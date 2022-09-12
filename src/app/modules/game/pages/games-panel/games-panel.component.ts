import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/modules/shared/game.model';
import { Player } from '../../../shared/player.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss'],
})
export class GamesPanelComponent implements OnInit {
  games: GameModel[] = [];

  constructor(private gameService: GameService) {}

  submit() {
    console.log('submit');
  }

  ngOnInit(): void {
    this.gameService.getGames('asd').subscribe((games) => {
      this.games = games;
      console.log(this.games);
    });
  }
}
