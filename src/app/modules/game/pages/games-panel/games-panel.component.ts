import { Component, OnInit } from '@angular/core';
import { Player } from '../../../shared/player.model';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModel } from '../../../shared/game.model';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss'],
})
export class GamesPanelComponent implements OnInit {
  mainPlayerId!: string;

  games: GameModel[] = [];

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  move() {
    this.router.navigate(['/game/board']);
  }

  submit() {
    console.log('submit');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.mainPlayerId = params['mainPlayerId'];
      this.getGames(this.mainPlayerId);
    });
  }

  getGames(uuid: string) {
    this.gameService.getGames(uuid).subscribe((games) => {
      console.log(games);
      this.games = games;
    });
  }
}
